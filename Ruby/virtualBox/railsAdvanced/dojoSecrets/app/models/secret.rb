class Secret < ActiveRecord::Base
  has_many :likes, dependent: :destroy #i added this. The dependent part makes sure that if the post is deleted, so are the likes.
  belongs_to :user
end
