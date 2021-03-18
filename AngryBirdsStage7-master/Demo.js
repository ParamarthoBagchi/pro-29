function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
async function getBgImage(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var rj= await response.json()
    var dt= rj.datetime
    var hour= dt.slice(11,13)
    if (hour>=6 && hour<18 ){
        bg="sprites/bg.png"
    }
    else{
        bg= "sprites/bg2.jpg"
    }
   backgroundImg= loadImage(bg);
}
   