class TweetsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    tweets = Tweet.all
    render json: tweets
  end
end
