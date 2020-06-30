Rails.application.routes.draw do
  resources :dojos

  root 'dojos#index'
  
  get 'dojos' => "dojos#index"

  get 'dojos/new' => "dojos#new"

  post 'dojos' => "dojos#create"


end
