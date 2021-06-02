const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');
canv.style.cursor="grabbing";

let strokeWidth = 1, pressed = false;
let keys = [];

window.onload = window.onresize = function(){
    let width = canv.width = window.innerWidth;
    let height = canv.height = window.innerHeight;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, width, height);
}

// key events callbacks...

document.onkeydown = function(e){
    keys.push(e.key);
    if(e.key == '+') strokeWidth++;
    if(e.key == '-') if(strokeWidth>1) strokeWidth--;
}

document.onkeyup = function(e){
    keys.pop(e.key);
}

// mouse events callbacks..

document.onmousemove = draw;
document.onmousedown = () => pressed = true;;
document.onmouseup = () => pressed = false;;

function degToRad(angle){
    return angle * Math.PI / 180;
}

// function to draw on board at mousemove event..

function draw(e){
    if(pressed){
        let posX = e.clientX;
        let posY = e.clientY;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(posX, posY, strokeWidth, degToRad(0), degToRad(360), false);
        ctx.fill();
        requestAnimationFrame(draw);
    }
}