music1 = "";
music2 = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
scoreleftwrist = 0;
statusofsongs = "";

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}
function setup(){
    video = createCapture(VIDEO);
    canvas = createCanvas(500,500);
    video.hide();
    canvas.center();
    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose" , gotPoses);
}
function draw(){
    image(video,0,0,500,500);

    statusofsongs = music1.isPlaying();
    fill(255,0,0);
    stroke(255,0,0);

    if (scoreleftwrist > 0.2){
        circle(leftwristX,leftwristY,20);
        music2.stop();
    }

    if (statusofsongs = "false"){
        music1.play();
        document.getElementById("songname").innerHTML = "SONG NAME - PETER PAN SONG";
    }
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);

       leftwristX = results[0].pose.leftWrist.x;
       leftwristY = results[0].pose.leftWrist.y;
       console.log("leftwristx = "+leftwristX + " leftwristy = "+leftwristY);

       rightwristX = results[0].pose.rightWrist.x;
       rightwristY = results[0].pose.rightWrist.y;
       console.log("rightwristx = "+rightwristX + " rightwristy = "+rightwristY);

       scoreleftwrist = results[0].pose.leftWrist.confidence;
       console.log(scoreleftwrist);
  }
}