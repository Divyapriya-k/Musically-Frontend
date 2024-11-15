// serverless function
export default async function handler(req, res) {
    const audioFile = await fetch('audio_file.mp3');
    const audioBuffer = await audioFile.arrayBuffer();
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(audioBuffer);
  }