noseX= 0
noseY= 0
difference= 0
rwX= 0
lwX= 0
//no Y position required because vertical position is not changing
function setup(){
    canvas= createCanvas(400,350)
    canvas.position(800, 280)

    video= createCapture(VIDEO)
    video.position(300, 200)
    video.size(400, 500)
}