import { Howl } from 'howler';

// Create a new Howl instance
const sound = new Howl({
  src: ['audio_file.mp3'],
  autoplay: true,
  loop: true,
});

// Play the audio
sound.play();