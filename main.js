const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');

window.onload = window.onresize = function(){
    let width = canv.width = window.innerWidth;
    let height = canv.height = window.innerHeight;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, width, height);
}

