Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :users, param: :email
      resources :checkins, param: :checkin_name
    end
  end

  get "*path", to: "pages#index", via: :all
end
