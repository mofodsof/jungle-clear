let players = {};

function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed"]');
  iframes.forEach((iframe, index) => {
    const id = 'ytplayer-' + index;
    iframe.id = id;
    players[id] = new YT.Player(id, {
      events: {
        onReady: (event) => setupSpeedControl(event.target, id)
      }
    });
  });
}

function setupSpeedControl(player, id) {
  const iframe = document.getElementById(id);

  iframe.addEventListener('mousedown', () => {
    player.setPlaybackRate(2);
  });

  iframe.addEventListener('mouseup', () => {
    player.setPlaybackRate(1);
  });

  iframe.addEventListener('mouseleave', () => {
    player.setPlaybackRate(1);
  });

  let toggledFast = false;
  document.addEventListener('keydown', (e) => {
    if (document.activeElement === iframe && e.key === 'ArrowRight') {
      toggledFast = !toggledFast;
      player.setPlaybackRate(toggledFast ? 2 : 1);
    }
  });
}

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

function flipCard(card) {
  card.classList.toggle('flipped');
}