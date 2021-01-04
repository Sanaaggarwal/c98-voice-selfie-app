var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    var speakdata=document.getElementById("textbox").value;
    var utter=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utter);
    Webcam.attach(camera);
}
Webcam.set({
    width:350,height:300,image_format:'png',png_quality:100,dest_width:340,dest_height:290
});
camera=document.getElementById("camera");