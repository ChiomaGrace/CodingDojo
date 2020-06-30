Rails.application.routes.draw do

  root 'hello#index'
  
  get 'hello' => "hello#hello"

  get 'say/hello' => "hello#new"

  get 'say/hello/joe' => "hello#show"

  get 'say/hello/:name' => "hello#show"

  get 'times' => "hello#create"

  get 'times/reset' => "hello#destroy"

end
