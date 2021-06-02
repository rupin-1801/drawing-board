const changer = document.querySelector('input[type="color"]');
const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');
canv.style.cursor="grabbing";

const cCanvas = ['Control', 'x'];
let strokeWidth = 1, pressed = false, width, height;
let keys = [];

window.onload = window.onresize = function(){
    width = canv.width = window.innerWidth;
    height = canv.height = window.innerHeight;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, width, height);
    changer.value="#FFFFFF";
}

// helper methods..

function clearCanvas(){
    ctx.fillStyle='black';
    ctx.fillRect(0,0,width,height);
}

function degToRad(angle){
    return angle * Math.PI / 180;
}

// function to draw on board at mousemove event..

function draw(e){
    if(pressed){
        let posX = e.clientX;
        let posY = e.clientY;
        ctx.beginPath();
        ctx.fillStyle = changer.value;
        ctx.arc(posX, posY, strokeWidth, degToRad(0), degToRad(360), false);
        ctx.fill();
        requestAnimationFrame(draw);
    }
}

// keys events...

document.onkeydown = function(e){
    keys.push(e.key);
    if(e.key == '+') strokeWidth++;
    if(e.key == '-') if(strokeWidth>1) strokeWidth--;
    keys = new Set(keys);
    keys = Array.from(keys);
    if(JSON.stringify(keys) == JSON.stringify(cCanvas))
        clearCanvas();   
}

document.onkeyup = function(e){
    keys.pop(e.key);
}

// mouse events..

document.onmousemove = draw;
document.onmousedown = () => pressed = true;;
document.onmouseup = () => pressed = false;;