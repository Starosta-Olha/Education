const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

window.onload = function() {
    //Clear Button
    document.getElementById("clear").onclick = function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    //width Scale
    document.getElementById('lineWidth').addEventListener('change', function () {
    ctx.lineWidth = document.getElementById('lineWidth').value;
    }, false);


    //Color
    document.getElementById('color').addEventListener('change', function () {
        ctx.strokeStyle = document.getElementById('color').value;
    }, false)

    //Size Canvas
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight - 60;

    //Mouse movement

    document.onmousemove = handleMouseMove;
    document.onmousedown = handleDown;
    document.onmouseup = handleUp;

    //Style line
    ctx.strokeStyle = '#000';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;

}

function handleMouseMove(event) {

    if(drawing){
        ctx.lineTo(event.clientX, event.clientY);
        ctx.closePath();
        ctx.stroke();
        ctx.moveTo(event.clientX, event.clientY);
    } else {
        ctx.moveTo(event.clientX, event.clientY);
    }
}

function handleDown(event){
    if (1){
        drawing =!drawing;
        console.log(drawing);
        ctx.moveTo(event.clientX, event.clientY);
        ctx.beginPath();
    }

}

function handleUp() {
    drawing =!drawing;
    console.log(drawing);

}
