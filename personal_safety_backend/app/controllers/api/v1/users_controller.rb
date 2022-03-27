module Api
  module V1
    class UsersController < ApplicationController
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
        SendNotificationJob.set(wait: 1.minute).perform_later(user)

        render json: "Job scheduled"
      end

      def send_emergency_email
        @user = User.find_by(phone_number: params[:phone_number])
        EmergencyMailer.with(user: @user).new_emergency_email.deliver_later
        render json: "Email was sent successfully "
      end

      private

      def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :token, :phone_number, :emergency_contacts)
      end

      def options
        @options ||= { include: %i[checkins] }
      end
    end
  end
end
