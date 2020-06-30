class Dojo < ActiveRecord::Base
    has_many :students
    validates :branch, :street, :city, presence: true
    validates :state, presence: true, length: {maximum: 2}
end
