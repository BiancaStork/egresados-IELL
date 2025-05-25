// Cargar la API de YouTube
  (function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  })();

  let player;

  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
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
      musica.volume = 0.2; /* baja el volumen 20%*/
      if (musica.paused) musica.play();
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
      musica.volume = 1;
      if (musica.paused) musica.play();
    }
  }