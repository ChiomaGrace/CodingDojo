class User < ActiveRecord::Base
  has_secure_password
  # validates :firstName, presence: true, acceptance: {message:"Piggy"} #this customizes the error message
  validates :firstName, :lastName, :emailAddress, :password, presence: true
  # length: {minimum: 6} if a length validation is needed
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :emailAddress, presence: true, uniqueness: {case_sensitive:false}, format: {with: EMAIL_REGEX}
end
