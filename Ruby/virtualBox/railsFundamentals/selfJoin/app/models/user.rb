class User < ActiveRecord::Base
    has_many :friendships, dependent: :destroy
    has_many :friends, through: :friendships, source: :friend #i made this
end

