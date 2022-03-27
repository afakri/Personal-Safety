Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :users, param: :phone_number
      resources :checkins, param: :checkin_name
      get "/reminder/:phone_number", to: "users#schedule_job"
      get "/emergency/:phone_number", to: "users#send_emergency_email"
    end
  end

  get "*path", to: "pages#index", via: :all
end
