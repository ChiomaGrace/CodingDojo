Rails.application.routes.draw do

  root 'users#new'

  # USER ROUTES #

  get 'users/index'

  get 'users/new'

  get 'users/edit'

  get 'users/show'

end
