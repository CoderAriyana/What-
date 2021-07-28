img = "";
status = "";
objectDetector = "";

function draw(){
image(img,0,0,604,402);
fill("#FF0000");
text("Dog",45,75);
noFill();
stroke("AF0000");
rect(30,60,450,350);

fill("#FF0000");
text("Cat",320, 120);
noFill();
stroke("FA0000");
rect(30,60,450,350);

function preload(){
    img = loadImage('');
}


function setup(){
    canvas = createCanvas(900,200);
    canvas.center;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : DETECTING OBJECTS";
}

function modelLoaded(){
    console.log("ModelLoaded");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
if (error) {
    console.log(error);
}
console.log(results);
objects = results;
}