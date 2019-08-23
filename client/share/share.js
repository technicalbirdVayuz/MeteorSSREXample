Template.share.onRendered(function(){
  playMP3();
});

function getFullMediaURL() {
    return cordova.file.applicationDirectory + "www/application/app/" +'www/audio/sound.mp3'
  }

  function playMP3() {
    alert("Playing");
    var url = "https://www.thesoundarchive.com/play-wav-files.asp?sound=ringtones/Ms_Pacman_Death.mp3"
    var url = getFullMediaURL();
    alert(url);
     var my_media = new Media(url,
        // success callback
        function () { alert("playAudio():Audio Success"); },
        // error callback
        function (err) { alert("playAudio():Audio Error: " + JSON.stringify(err)); }
    );
 
    // Play audio
    my_media.play();
 
    // Pause after 10 seconds
    setTimeout(function () {
        my_media.play();
    }, 10000);

  }