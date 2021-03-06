Rails.application.routes.draw do
  resources :dojos

  root 'dojos#index'
  
  get 'dojos' => "dojos#index"

  get 'dojos/new' => "dojos#new"

  post 'dojos' => "dojos#create"

  get 'dojos/:id' => "dojos#show"

  get 'dojos/:id/edit' => "dojos#edit"

  patch 'dojos/:id' => "dojos#update"

  delete 'dojos/:id/destroy' => "dojos#destroy"


end
