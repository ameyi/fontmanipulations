function setup(){
    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    video = createCapture(VIDEO)
    video.size(550, 550)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
    background('#00FFFF')
    textSize(difference)
    fill("#ffee787")
    text("Ameya", 50, 400)
}
function modelLoaded(){
    console.log("model has been loaded successfully")
}
nosex = 0
nosey = 0
leftwristx = 0
rightwristx = 0
difference = 0
function gotPoses(results){        
    if(results.length > 0){
        console.log(results)
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex " + nosex + " nosey " + nosey)

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("leftwristx " + leftwristx + " rightwristx " + rightwristx + " difference " + difference);
    }
}