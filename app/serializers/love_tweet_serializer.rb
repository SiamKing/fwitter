class LoveTweetSerializer < ActiveModel::Serializer
  attributes :id, :tweet_id, :user_id
  has_one :tweet
end
