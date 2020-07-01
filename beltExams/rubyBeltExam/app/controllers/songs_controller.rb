class SongsController < ApplicationController

    def index
        if flash[:errors]
            @errors = flash[:errors]
        end
    @allSongs = Song.all

    end

    def create
        addSong = Song.create(title: songParams[:title], artist: songParams[:artist])
        if addSong.errors.any?
            # p "*" *50
            # p addSong.errors.full_messages # this is how to see error messages in the terminal
            # p "*" *50
            flash[:errors] = addSong.errors.full_messages
            redirect_to "/songs" and return #need return to return the value aka the error messages
        end
        redirect_to "/songs"
    end

    def show
        @specificSong = Song.find(params[:id])
        @allUsersWhoAddedSong = @specificSong.users.uniq #the uniq takes away the duplicates of the times it was added to the playlist
    end

private
    def songParams
        params.require(:song).permit(:title, :artist) #pass everything from the form you want in order for it to be in the database
    end
end
