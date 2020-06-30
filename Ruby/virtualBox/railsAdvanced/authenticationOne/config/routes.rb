Rails.application.routes.draw do

  resources :users

  root 'users#new'

  get 'users/new' => "users#new"
  
  post 'users' => "users#create"
  
  get 'users/:id' => "users#show"
  
  post 'sessions/create' => "sessions#create" 

  delete 'sessions/:id' => "sessions#destroy"


end
