Rails.application.routes.draw do

  resources :users #this gives the ability to see all the routes in terminal after typing rake routes

  get 'users/new' => "users#new" #This is the route that displays the form.

  post 'users/create' => "users#create" #This is the POST route the form is getting directed to in order to be processed.

  get '/users/:id' => "users#show" #This is the route that shows all the users.

end
