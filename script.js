//your JS code here. If required.
const audioPaths = {
  65: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // A
  83: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // S
  68: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // D
  70: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // F
  71: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // G
  72: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // H
  74: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // J
  75: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // K
  76: 'https://pixabay.com/sound-effects/2021/06/09/audio_60bfb73ef9ef7.mp3', // L
};


function playSound(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (key) {
 
    const audio = new Audio(audioPaths[event.keyCode]);
    audio.play();

  
    key.classList.add('playing');
    setTimeout(() => {
      key.classList.remove('playing');
    }, 100);
  }
}

// Attach event listener
window.addEventListener('keydown', playSound);

