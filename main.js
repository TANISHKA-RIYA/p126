music1 = "";
music2 = "";

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}
function setup(){
    video = createCapture(VIDEO);
    canvas = createCanvas(500,500);
    video.hide();
    canvas.center();
}
function draw(){
    image(video,0,0,500,500);
}