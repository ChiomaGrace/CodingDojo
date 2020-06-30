Rails.application.routes.draw do

  resources :users
  
  root 'users#new'
  
  get 'users/new' => "users#new"

  post 'users' => "users#create"
  
  get 'users/:id' => "users#show"
  
  delete '/users/:user_id/secrets/:id' => "secrets#destroy" #the one for the show page
  
  post 'sessions/create' => "sessions#create" 
  
  delete 'sessions/:id' => "sessions#destroy" #this is for logging out

  resources :secrets

  get 'secrets' => "secrets#index"

  post 'secrets' => "secrets#create"

  delete '/secrets/:id' => "secrets#destroy" #the one on the index page

  resources :likes
  
  post 'secrets/:id/likes' => "likes#create"

  delete 'secrets/:id/unlike' => "likes#destroy"

end
