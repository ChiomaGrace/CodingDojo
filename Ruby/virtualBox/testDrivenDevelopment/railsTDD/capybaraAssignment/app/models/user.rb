class User < ActiveRecord::Base
    validates :firstName, :lastName, :email, presence: true
end
