(() => {
    console.log('fired');
    
    const openButtonBC = document.querySelector('.openButton-bc'),
          closeButtonBC = document.querySelector('.closeButton-bc'),
          trans 	    = document.querySelector('.trans'),
          video = document.querySelector('.video'),
          pauseButton = document.querySelector('.pauseButton');
          slowButton = document.querySelector('#slowButton');
          fastButton = document.querySelector('#fastButton');
          progBar = document.querySelector('.progBar');
          volumeChange = document.querySelector('.volume');
          timeVideo = document.querySelector('.time');
          subButton = document.querySelector('#subButton');
          subtitles = document.getElementById('subtitles');
          subt = video.textTracks[0];

          function openTrans() {
            trans.classList.add('show-trans');
        }
        
        function closeTrans() {
            trans.classList.remove('show-trans');
        }

        function pausePlay() {
            if (video.paused == true) {
              video.play();
              video.playbackRate = 1;
              pauseButton.innerHTML = 'Pause';
            } else {
              video.pause();
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
                    video.muted = !video.muted;
                  break;
        
                  case 37:
                      event.preventDefault();
                      
                      vid_currentTime = video.currentTime;
                      video.currentTime = vid_currentTime - 5;
                    break;
                 
                 case 39:
                      event.preventDefault();
                      
                      vid_currentTime = video.currentTime;
                      video.currentTime = vid_currentTime + 5;
                    break;
        
                case 38:
                    event.preventDefault();
                    audio_vol = video.volume;
        
                    video.volume = audio_vol + 0.05;
        
                             
                    break;
                        
                case 40:
                    event.preventDefault();
                    audio_vol = video.volume;
                    video.volume = audio_vol - 0.05;
                    
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
                     video_speed = video.playbackRate;
        
                    video.playbackRate = video_speed - 0.5;
                            
                             break;
        
                 case 221:
                     event.preventDefault();
                     video_speed = video.playbackRate;
        
                    video.playbackRate = video_speed + 0.5;
                            
                             break;
        
                             case 65:
                                event.preventDefault();
                                trans.classList.add('show-trans');
                                        
                                        break;
        
                                        case 66:
                                event.preventDefault();
                                trans.classList.remove('show-trans');
                                        
                                        break;
        
               
            }
        };
        
        function slower() {
            event.preventDefault();
            video_speed = video.playbackRate;
        
            video.playbackRate = video_speed - 0.5;
        };
        
        function faster() {
            event.preventDefault();
            video_speed = video.playbackRate;
        
            video.playbackRate = video_speed + 0.5;
          };
        
          function barMoving() {
            video.currentTime = video.duration * progBar.value / progBar.max;
          };
          
          function videoMoveSlider() {
              progBar.value = video.currentTime / video.duration * progBar.max;
              timeVideo.innerHTML = Math.round(video.currentTime);
            
          
          }
        
        
          subt.mode = 'hidden';
        
        
        
        function subtitlesOn(){
          subt.mode = 'showing';
        
        }
        pauseButton.addEventListener('click', pausePlay);
        openButtonBC.addEventListener('click', openTrans);
        closeButtonBC.addEventListener('click', closeTrans);
        slowButton.addEventListener('click', slower);
        fastButton.addEventListener('click', faster);
        progBar.addEventListener('change', barMoving);
        video.addEventListener('timeupdate', videoMoveSlider);
        subButton.addEventListener('click', subtitlesOn);

        })();