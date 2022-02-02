class PagesController < ApplicationController
  def index
    render json: "This is an api only app"
  end
end
