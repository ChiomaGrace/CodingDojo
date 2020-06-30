class User < ActiveRecord::Base
  has_secure_password
  has_many :events
  has_many :joins, dependent: :destroy
  has_many :comments
  validates :firstName, :lastName, :emailAddress, :city, :state, presence: true
  validates :password, presence: true, :on => :create
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :emailAddress, presence: true, uniqueness: {case_sensitive:false}, format: {with: EMAIL_REGEX}
end
