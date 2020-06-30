class User < ActiveRecord::Base
  has_secure_password
  has_many :playlists #this is the 3rd [] that gets made on my SQL through many to many relationships
  has_many :songs, through: :playlists
  validates :firstName, :lastName, :emailAddress, :password, presence: true
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :emailAddress, presence: true, uniqueness: {case_sensitive:false}, format: {with: EMAIL_REGEX}
end
