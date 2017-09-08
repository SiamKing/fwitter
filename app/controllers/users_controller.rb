class UsersController < ApplicationController
  before_action :authenticate_user, only: [:edit]

  def show
    user = User.find_by_id(params[:id])
    render json: user, include: {tweets: [:retweets, :love_tweets], retweets: [:tweet], love_tweets: [:tweet]}
  end

  def edit

  end

end
