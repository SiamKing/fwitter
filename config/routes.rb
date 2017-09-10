Rails.application.routes.draw do

  root 'application#index'  
  devise_for :users
  resources :users, only: [:show]

  resources :tweets, only: [:create, :destroy, :update, :index, :show]
  post 'tweets/:id/retweet', to: 'tweets#retweets'
  post 'tweets/:id/love_tweets', to: 'tweets#love_tweets'
end
