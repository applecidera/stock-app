Rails.application.routes.draw do

  root to: 'static#root'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    
  end
  
end
