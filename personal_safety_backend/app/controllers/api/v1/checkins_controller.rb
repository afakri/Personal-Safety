module Api
  module V1
    class CheckinsController < ApplicationController
      def index
        checkins = Checkin.all
        render json: CheckinSerializer.new(checkins).serializable_hash.to_json
      end

      def show
        checkin = Checkin.find_by(checkin_name: params[:checkin_name])

        render json: CheckinSerializer.new(checkin).serializable_hash.to_json
      end

      def create
        checkin = Checkin.new(checkin_params)

        if checkin.save
          render json: "Checkin was saved successfully "
        else
          render json: "Something went wrong while saving checkin", status: 422
        end
      end

      def update
        checkin = Checkin.find_by(checkin_name: params[:checkin_name])

        if checkin.update(checkin_params)
          render json: "checkin updated successfully "
        else
          render json: "Something wrong happened while updating checkin", status: 422
        end
      end

      def destroy
        checkin = Checkin.find_by(checkin_name: params[:checkin_name])

        if checkin.destroy
          render json: "checkin deleted successfully "
        else
          render json: "Something wrong happened while deleting checkin", status: 422
        end
      end

      private

      def checkin_params
        params.require(:checkin).permit(:checkin_name, :delay, :window, :days, :checkedin)
      end
    end
  end
end
