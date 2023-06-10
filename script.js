//your JS code here. If required.
// Function to play the sound based on the key press
function playSound(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!key) return;

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.currentTime = 0; // Rewind the audio to the start
  audio.play();

  key.classList.add('playing');
}

// Function to remove the playing class when the transition ends
function removePlayingClass(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Attach event listeners
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));
window.addEventListener('keydown', playSound);
