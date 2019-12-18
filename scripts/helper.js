
class Helper {
  playPauseAndUpdate (song){
    player.playPause(song);
    const duration = player.getDuration(song);
    $('#time-control .total-time').text(duration);
  };
};

const helper = new Helper ();


/*  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const nextSongIndex = currentSongIndex + 1;
  const prevSongIndex = currentSongIndex - 1;
  const prevSong = album.songs[prevSongIndex];
  const nextSong = album.songs[nextSongIndex];*/
