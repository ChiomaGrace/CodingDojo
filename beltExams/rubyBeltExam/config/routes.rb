Rails.application.routes.draw do

  # USER ROUTES #

  root 'users#new'

  get 'users/new' => "users#new"
  
  post 'users' => "users#create"

  get 'users' => "users#index"

  get 'users/:id' => "users#show"
  
  get 'users/:id/:edit' => "users#edit"

  patch 'users/:id' => "users#update"

  get 'users/:id' => "users#destroy"


  # SESSION ROUTES #

  post 'sessions/create' => "sessions#create" 
  
  delete 'sessions/:id' => "sessions#destroy"

  # SONG ROUTES #

  get 'songs' => "songs#index"

  post 'songs' => "songs#create"

  get 'songs/:id' => "songs#show"


  # PLAYLIST ROUTES #

  post 'songs/:id/add' => "playlists#create"

end
