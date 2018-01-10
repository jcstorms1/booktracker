Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :books
      resources :lists
      resources :users
      
      post '/auth', to: 'auth#create'
    end
  end
end
