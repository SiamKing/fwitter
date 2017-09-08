Rails.application.routes.draw do
  devise_for :users

  resources :tweets, only: [:create, :destroy, :update, :index, :show]
end
