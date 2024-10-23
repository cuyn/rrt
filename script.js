document.getElementById('selfieButton').onclick = function() {
    // Access the video element
    var video = document.getElementById('video');
    
    // Access the canvas element
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    // Trigger the selfie capture
    context.drawImage(video, 0, 0, 320, 240);
    
    // Save the canvas image as a file
    var link = document.createElement('a');
    link.download = 'selfie.png';
    link.href = canvas.toDataURL();
    link.click();
};

// Access the webcam
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        // Display the webcam stream in the video element
        document.getElementById('video').srcObject = stream;
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });