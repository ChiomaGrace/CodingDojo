class Client < ActiveRecord::Base
    EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
    validates :firstName, :lastName, presence: true, length: {minimum: 2}
    validates :emailAddress, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
    validates :age, :numericality => { only_integer: true, greater_than: 10, less_than: 150 }
end