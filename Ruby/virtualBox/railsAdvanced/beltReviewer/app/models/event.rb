class Event < ActiveRecord::Base
  belongs_to :user
  has_many :joins, dependent: :destroy
  has_many :users, through: :joins #you added this relationship in order to show all the users that joined a specific event
  has_many :comments
  validates :name, :date, :city, :state, presence: true
  validate :onlyFutureEventDates?

  def onlyFutureEventDates? #the question mark signifies a boolean should return true or false
    if !self.date.blank? and self.date < Date.today #checks to see if the date field is left blank AND to make sure only future dates are selected.
      errors.add("Event date", "cannot be in the past")
    end
    # errors.add("Event date", "cannot be in the past") if !self.date.blank? and self.date < Date.today could also write it like this or even use an unless instead of an if
  end
end
