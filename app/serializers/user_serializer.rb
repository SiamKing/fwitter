class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :tweets
  has_many :retweets
  has_many :love_tweets
end
