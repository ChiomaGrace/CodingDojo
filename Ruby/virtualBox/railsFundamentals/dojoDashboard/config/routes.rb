Rails.application.routes.draw do
  resources :dojos

  root 'dojos#index'
  
  get 'dojos/index' => "dojos#index"

end
