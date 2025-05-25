// Cargar la API de YouTube
  (function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  })();

  let player;

  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'VDOl1p7ulzM', // Cambia por tu ID
      playerVars: {
        autoplay: 0,
        controls: 1,
        mute: 0,
        rel: 0,
        modestbranding: 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  function onPlayerReady(event) {
    // Opcional: código al cargar el reproductor
  }

 function onPlayerStateChange(event) {
  const musica = document.getElementById('musica');
  if (!musica) return;

  if (event.data === YT.PlayerState.PLAYING) {
    player.setVolume(0); // Baja el volumen del video al 30%
    // Pausa el audio cuando el video se reproduce
  //   if (!musica.paused) musica.pause();
  // } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
  //   // Reproduce el audio cuando el video se pausa o termina
  //   if (musica.paused) musica.play();
   }
}
 