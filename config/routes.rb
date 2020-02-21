Rails.application.routes.draw do

  get 'pages/index'
  root to: 'static#root'
  
end
