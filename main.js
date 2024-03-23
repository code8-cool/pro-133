x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
to_number = "";
draw_apple = "";
speak_data = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 

function preload (){
  loadImage(apple);
}
 
recognition.onresult = function(event) {
to_number = Number(content);
if(Number.isInteger(to_number))
{
  document.getElementById("status").innerHTML = "Started drawing apple";
}else{

document.getElementById("status").innerHTML = "The speech has not recognized a number";
}

console.log(event);
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas( screen_width,screen_height-150)
canvas.position(x = Math.floor(Math.random()* 0);   
y = Math.floor(Math.random()* 600);    );
}

function draw() {
  if(draw_apple == "set")
  {
    for (var i = 1; i <= to_number; i++ )
    {
      x = Math.floor(Math.random()* 550);   
      y = Math.floor(Math.random()* 200);
      image(apple, x, y, 50, 50);
    }

    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
speak_data = to_number + "Apples drawn";
speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

