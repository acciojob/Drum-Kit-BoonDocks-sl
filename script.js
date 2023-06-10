document.addEventListener('keydown', function(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  
  if (!key || !audio) return;
  
  audio.currentTime = 0;
  audio.play();
  
  key.classList.add('playing');
});

document.addEventListener('keyup', function(event) {
  const key = document.querySelector(`key[data-key="${event.keyCode}"]`);
  
  if (!key) return;
  
  key.classList.remove('playing');
});

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  
  this.classList.remove('playing');
}
