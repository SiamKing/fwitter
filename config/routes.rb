Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:show]

  resources :tweets, only: [:create, :destroy, :update, :index, :show]
end
