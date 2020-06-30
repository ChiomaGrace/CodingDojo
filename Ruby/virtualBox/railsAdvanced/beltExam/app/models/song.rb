class Song < ActiveRecord::Base
    has_many :playlists #this is the 3rd [] that gets made on my SQL through many to many relationships
    has_many :users, through: :playlists 
    validates :title, :artist, presence: true, length: {minimum: 2}
end
