// YouTube API
let isPlaying = false;
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  player.setVolume(50);
}

function toggleAudio() {
  const playIcon = document.getElementById('playIcon');
  const buttonText = document.getElementById('buttonText');
  const button = document.querySelector('.sound-button');
  
  if (!isPlaying) {
    // For simple audio control without YouTube API
    const iframe = document.getElementById('video');
    iframe.src += '&autoplay=1';
    playIcon.textContent = '⏸️';
    buttonText.textContent = 'Pause Sound | Playing Sound!! 🎧';
    button.classList.add('playing');
    isPlaying = true;
  } else {
    const iframe = document.getElementById('video');
    iframe.src = iframe.src.replace('&autoplay=1', '');
    playIcon.textContent = '▶️';
    buttonText.textContent = 'Play Sound';
    button.classList.remove('playing');
    isPlaying = false;
  }
}
