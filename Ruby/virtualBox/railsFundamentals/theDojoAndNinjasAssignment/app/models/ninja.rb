class Ninja < ActiveRecord::Base
  belongs_to :dojo
  validates :firstName, :lastName, presence: true
end
