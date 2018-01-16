Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :books
      resources :lists
      resources :users
      
      post '/login', to: 'auth#create'
      get '/auth', to: 'auth#show'
      post '/byisbn', to: 'books#byisbn'
      
    end
  end
end
