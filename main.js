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
    if(content=="take my selfie"){
     speak();
     console.log("take the selfie");
    }
    else{
        console.log("it will take the selfie when you will say take my selfie.");
    }
}
function speak(){
    var synth=window.speechSynthesis;
    var speakdata="taking you selfie in 3 seconds";
    var utter=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utter);
    Webcam.attach(camera);
setTimeout(function(){
    takesnapshot();
    save();
},3000);
}
Webcam.set({
    width:350,height:300,image_format:'png',png_quality:100,dest_width:340,dest_height:290
});
camera=document.getElementById("camera");
function takesnapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="new_img" src="'+data_url+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("new_img").src;
    link.href=image;
    link.click();
}