Rails.application.routes.draw do
  
  
  get '/users/new' => "users#new"
  
  post '/users/create' => "users#create"
  
  get '/messages' => "messages#index"

  post '/messages' => "messages#create"

  post '/comments' => "comments#create"

  get '/logout' => "messages#logout"
  



end
