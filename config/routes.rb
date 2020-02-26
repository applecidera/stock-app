Rails.application.routes.draw do

  root to: 'static#root'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :trades, only: [:create, :index, :show]

  end
  
end
