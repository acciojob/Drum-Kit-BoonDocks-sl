const audioPaths = {
  65: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // A
  83: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // S
  68: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // D
  70: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // F
  71: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // G
  72: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // H
  74: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // J
  75: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // K
  76: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3', // L
};

// Function to play the sound based on the key press
function playSound(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (key) {
    // Get the audio element
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    if (audio) {
      // Play sound logic here
      audio.currentTime = 0;
      audio.play();
  
      // Add playing effect
      key.classList.add('playing');
      setTimeout(() => {
        key.classList.remove('playing');
      }, 100);
    }
  }
}

// Attach event listener
window.addEventListener('keydown', playSound);
