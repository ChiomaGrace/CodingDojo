class PlaylistsController < ApplicationController
    before_action :findSong #to add a song you must first have a song to add.

    def create #this is like creating a normal feature with a form. Then pass through the two keys/values you need to link in order to create an add feature
        Playlist.create(song: findSong, user: currentUser)
        redirect_to "/songs"
    end

private
    def findSong
        Song.find(params[:id])
    end
end
