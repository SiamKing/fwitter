class Tweet < ApplicationRecord
  belongs_to :user
  has_many :retweets
  has_many :love_tweets
end
