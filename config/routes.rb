Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      get 'greeting/random', to: 'greeting#random_greeting'
    end
  end
end
