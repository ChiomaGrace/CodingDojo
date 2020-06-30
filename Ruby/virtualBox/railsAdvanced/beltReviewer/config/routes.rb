Rails.application.routes.draw do
  
  resources :users
  
  root 'users#new'
  
  get 'users/new' => "users#new"
  
  post 'users' => "users#create"
  
  get 'users/index' => "users#index"
  
  get 'users/:id' => "users#show"
  
  get 'users/:id/:edit' => "users#edit"
  
  patch 'users/:id' => "users#update"
  
  
  resources :sessions

  post 'sessions/create' => "sessions#create" 
  
  delete 'sessions/:id' => "sessions#destroy"

  
  resources :events

  get 'events' => "events#index"
  
  get 'events/:id' => "events#show"
  
  post 'events' => "events#create"

  get 'events/:id/:edit' => "events#edit"

  patch 'events/:id' => "events#update" #update doesn't work remember to fix

  delete 'events/:id' => "events#destroy"


  resources :joins

  post 'events/:id/joins' => "joins#create"

  delete 'events/:id/cancel' => "joins#destroy"


  resources :comments

  post 'comments' => "comments#create"





end
