var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    
    recognition.start();
}
recognition.onresult =function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
        if(Content =="take my selfie")
        {
        console.log("taking my selfie --- ");
        speak();
        }
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    synth.speak(utterThis);
    Webcam.attach(camera);
}
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src"'+data_uri'">';
});
}

