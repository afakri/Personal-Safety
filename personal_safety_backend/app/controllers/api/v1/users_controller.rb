module Api
  module V1
    class UsersController < ApplicationController
      require "faraday"
      require "faraday/net_http"
      Faraday.default_adapter = :net_http

      def index
        users = User.all
        render json: UserSerializer.new(users, options).serializable_hash.to_json
      end

      def show
        user = User.find_by(phone_number: params[:phone_number])

        render json: UserSerializer.new(user, options).serializable_hash.to_json
      end

      def create
        user = User.new(user_params)

        if user.save
          render json: "User was saved successfully "
        else
          render json: "Something went wrong while saving user", status: 422
        end
      end

      def update
        user = User.find_by(phone_number: params[:phone_number])

        if user.update(user_params)
          render json: "user updated successfully "
        else
          render json: "Something wrong happened while updating user", status: 422
        end
      end

      def destroy
        user = User.find_by(phone_number: params[:phone_number])

        if user.destroy
          render json: "user deleted successfully "
        else
          render json: "Something wrong happened while deleting user", status: 422
        end
      end

      def schedule_job
        user = User.find_by(phone_number: params[:phone_number])
        token = user.token

        conn = Faraday.new
        res = conn.post("https://exp.host/--/api/v2/push/send",
                        {
          "to" => "ExponentPushToken[rIxdIkGUyxec2zoZAB6JEd]",
          "sound" => "default",
          "title" => "Check in",
          "body" => "It's time to check in!",
          "data" => { "someData" => "goes here" },
        }.to_json, {
          "Accept" => "application/json",
          "Accept-encoding" => "gzip, deflate",
          "Content-Type" => "application/json",
        })

        render json: res
      end

      private

      def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :token, :phone_number)
      end

      def options
        @options ||= { include: %i[checkins] }
      end
    end
  end
end
