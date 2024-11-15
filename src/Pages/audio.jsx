// Create an audio context
const audioContext = new AudioContext();

// Create a source node
const source = audioContext.createBufferSource();

// Load an audio file
fetch('audio_file.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    // Set the audio buffer to the source node
    source.buffer = audioBuffer;
    // Connect the source node to the destination (speakers)
    source.connect(audioContext.destination);
    // Start playing the audio
    source.start();
  });