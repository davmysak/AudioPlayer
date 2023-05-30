<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Audio Player Web Component">
    <title>Audio Player Web Component</title>
    <script src="app.js" type="text/javascript"></script> <!-- async defer -->
</head>
<body>
    <audio-player>
      <audio src="<!-- audio file -->" controls></audio>
    </audio-player>

    <script>
      // Create an instance of the audio-player component
      const audioPlayer = document.createElement('audio-player');
      // Append the component to a specific location in the document
      document.body.appendChild(audioPlayer);
    </script>
</body>
</html>
