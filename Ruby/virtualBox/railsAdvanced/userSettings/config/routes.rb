Rails.application.routes.draw do

  resources :users

  root 'users#new'

  get 'users/new' => "users#new"
  
  post 'users' => "users#create"

  get 'users/index' => "users#index"

  get 'users/:id' => "users#show"
  
  get 'users/:id/:edit' => "users#edit"

  patch 'users/:id' => "users#update"

  get 'users/:id' => "users#destroy"

  post 'sessions/create' => "sessions#create" 
  
  delete 'sessions/:id' => "sessions#destroy"

end
