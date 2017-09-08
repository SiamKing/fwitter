class TweetsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    tweets = Tweet.all
    render json: tweets
  end

  def show
    tweet = Tweet.find_by_id(params[:id])
    render json: tweet
  end

  def create
    tweet = current_user.tweets.build(tweet_params)
    if tweet.save
      render json: {status: 'ok'}
    else
      render json: {errors: tweet.errors.full_messages},
      status: :unproccessable_entity
    end
  end

  def update
    tweet = Tweet.find_by_id(params[:id])
    if tweet.update(tweet_params)
      render json: { status: 'ok' }
    else
      render json: {errors: tweet.errors.full_messages},
      status: :unproccessable_entity
    end
  end

  def heart_tweet
    tweet = Tweet.find_by_id(params[:id])
    tweet.heart_tweets.build(user_id: current_user.id)
    if tweet.save
      render json: { status: 'ok' }
    else
      render json: {errors: tweet.errors.full_messages},
      status: :unproccessable_entity
    end
  end

  def love_tweet
    tweet = Tweet.find_by_id(params[:id])
    tweet.love_tweets.build(user_id: current_user.id)
    if tweet.save
      render json: { status: 'ok' }
    else
      render json: {errors: tweet.errors.full_messages},
      status: :unproccessable_entity
    end
  end


  def destroy
    tweet = Tweet.find_by_id(params[:id])
    if tweet.user == current_user.id
      Tweet.where("tweet_id = ?", tweet.id).each { |t| t.destroy }
      Tweet.where("tweet_id = ?", tweet.id).each { |t| t.destroy }
      if tweet.destroy
        render json: { status: 'ok' }
      else
        render json: {errors: tweet.errors.full_messages},
        status: :unproccessable_entity
      end
    end
  end

  private

  def tweet_params
    params.require(:tweet).require(:content)
  end
end
