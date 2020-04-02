(() => {
	console.log('fired');

const  lyrics 	    = document.querySelector('.lyrics'),
       openButton = document.querySelector('.openButton'),
       closeButton = document.querySelector('.closeButton'),
       music = document.querySelector('.music'),
       pauseButton = document.querySelector('.pauseButton');
       slowButton = document.querySelector('#slowButton');
       fastButton = document.querySelector('#fastButton');
       progBar = document.querySelector('.progBar');
       volumeChange = document.querySelector('.volume');
       timeVideo = document.querySelector('.time');



function openLyrics() {
	lyrics.classList.add('box-on');
}

function closeLyrics() {
    lyrics.classList.remove('box-on');
}

function pausePlay() {
    if (music.paused == true) {
      music.play();
      music.playbackRate = 1;
      pauseButton.innerHTML = 'Pause';
    } else {
      music.pause();
      pauseButton.innerHTML = 'Play';
    }
  };

  document.onkeydown = function(event) {
    switch (event.keyCode) {
       
       case 32:
            event.preventDefault();
            pausePlay();
          break;

          case 77:
            event.preventDefault();
            music.muted = !music.muted;
          break;

          case 37:
              event.preventDefault();
              
              vid_currentTime = music.currentTime;
              music.currentTime = vid_currentTime - 5;
            break;
         
         case 39:
              event.preventDefault();
              
              vid_currentTime =  music.currentTime;
              music.currentTime = vid_currentTime + 5;
            break;

        case 38:
            event.preventDefault();
            audio_vol = music.volume;

            music.volume = audio_vol + 0.05;

                     
            break;
                
        case 40:
            event.preventDefault();
            audio_vol = music.volume;
            music.volume = audio_vol - 0.05;
            
                   break;

        case 67:
            event.preventDefault();
            subt.mode = 'showing';
                    
                    break;

                    case 68:
            event.preventDefault();
            subt.mode = 'hidden';
                    
                    break;

        case 219:
             event.preventDefault();
             video_speed = music.playbackRate;

            music.playbackRate = video_speed - 0.5;
                    
                     break;

         case 221:
             event.preventDefault();
             video_speed = music.playbackRate;

            music.playbackRate = video_speed + 0.5;
                    
                     break;

                     case 65:
                        event.preventDefault();
                        lyrics.classList.add('box-on');
                                
                                break;

                                case 66:
                        event.preventDefault();
                        lyrics.classList.remove('box-on');
                                
                                break;

       
    }
};

function slower() {
    event.preventDefault();
    video_speed = music.playbackRate;

    music.playbackRate = video_speed - 0.5;
};

function faster() {
    event.preventDefault();
    video_speed = music.playbackRate;

     music.playbackRate = video_speed + 0.5;
  };

  function barMoving() {
    music.currentTime = music.duration * progBar.value / progBar.max;
  };
  
  function videoMoveSlider() {
      progBar.value = music.currentTime / music.duration * progBar.max;
      timeVideo.innerHTML = Math.round(music.currentTime);
    
  
  }

openButton.addEventListener('click', openLyrics);
closeButton.addEventListener('click', closeLyrics);
pauseButton.addEventListener('click', pausePlay);
slowButton.addEventListener('click', slower);
fastButton.addEventListener('click', faster);
progBar.addEventListener('change', barMoving);
music.addEventListener('timeupdate', videoMoveSlider);
subButton.addEventListener('click', subtitlesOn);

})();