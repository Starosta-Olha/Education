const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

let objArray = [];
let lastTime = (new Date()).getTime();
let currentTime = 0;
let dt = 0;

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

canvas.onclick = function keyDownHandler(event) {
    objArray[objArray.length] = new Circles (event.offsetX, event.offsetY, random(10, 50));
}


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

class Circles {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = null;
        this.dy = null;
        this.speed = null;
        this.color = null;
        this.radius = null;
        this.setParams();
    }

    setParams() {
        this.radius = random(10, 50);
        this.speed = random(5, 25);
        this.color = randomRGB();
        const angle = Math.random() * 2 * Math.PI;
        this.dx = Math.cos(angle);
        this.dy = Math.sin(angle);
    }

    draw() {
        ctx.beginPath();
        ctx.arc(Math.round(this.x), Math.round(this.y), this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.stroke();
        ctx.closePath();
    }
}

function collisionDetect() {
    for (const circle of objArray) {
        if (!(this === circle)) {
            const dx = this.x - circle.x;
            const dy = this.y - circle.y;
            const distance = findDistance(this, circle)

            if (distance < this.radius + circle.radius) {

                const theta1 = findAngle(this.dx, this.dy)
                const theta2 = findAngle(circle.dx, circle.dy)
                const phi = Math.atan2(circle.y - this.y, circle.x - this.x);
                const mainSize = this.radius * this.radius * this.radius;
                const subSize = circle.size * circle.size * circle.size;
                const mainSpeed = findSpeed(this.dx, this.dy);
                const subSpeed = findSpeed(circle.dx, circle.dy);

                const dx1F = (mainSpeed * Math.cos(theta1 - phi) * (mainSize - subSize) + 2 * subSize * subSpeed * Math.cos(theta2 - phi)) / (mainSize + subSize) * Math.cos(phi) + mainSpeed * Math.sin(theta1 - phi) * Math.cos(phi + Math.PI / 2);
                const dy1F = (mainSpeed * Math.cos(theta1 - phi) * (mainSize - subSize) + 2 * subSize * subSpeed * Math.cos(theta2 - phi)) / (mainSize + subSize) * Math.sin(phi) + mainSpeed * Math.sin(theta1 - phi) * Math.sin(phi + Math.PI / 2);
                const dx2F = (subSpeed * Math.cos(theta2 - phi) * (subSize - mainSize) + 2 * mainSize * mainSpeed * Math.cos(theta1 - phi)) / (mainSize + subSize) * Math.cos(phi) + subSpeed * Math.sin(theta2 - phi) * Math.cos(phi + Math.PI / 2);
                const dy2F = (subSpeed * Math.cos(theta2 - phi) * (subSize - mainSize) + 2 * mainSize * mainSpeed * Math.cos(theta1 - phi)) / (mainSize + subSize) * Math.sin(phi) + subSpeed * Math.sin(theta2 - phi) * Math.sin(phi + Math.PI / 2);

                this.dx = dx1F;
                this.dy = dy1F
                circle.dx = dx2F;
                circle.dy = dy2F;

                staticCollision(this, circle)

            }
        }
        wallCollision (circle);
    }
}

function findSpeed (dx,dy) { Math.sqrt(dx * dx + dy * dy) };
function findAngle (dx,dy) { Math.atan2(dx, dy) };
function findDistance(a, b) { Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2) };

function staticCollision(ob1, ob2, emergency=false)  {

    let overlap = ob1.size + ob2.size - findDistance(ob1, ob2);
    let smallerObject = ob1.size < ob2.size ? ob1 : ob2;
    let biggerObject = ob1.size > ob2.size ? ob1 : ob2;

    if (emergency) {
        [smallerObject, biggerObject] = [biggerObject, smallerObject]
    }

    let theta = Math.atan2((biggerObject.y - smallerObject.y), (biggerObject.x - smallerObject.x));
    smallerObject.x -= overlap * Math.cos(theta);
    smallerObject.y -= overlap * Math.sin(theta);

    if (findDistance(ob1, ob2) < ob1.size + ob2.size) {
        if (!emergency) staticCollision(ob1, ob2, true)
    }
}

function moveObjects() {
    for (let i=0; i<objArray.length; i++) {
        let ob = objArray[i];
        ob.x += ob.dx * dt;
        ob.y += ob.dy * dt;
    }
}



function draw() {
    currentTime = (new Date()).getTime();
    dt = (currentTime - lastTime) / 1000;

    dt *= 50;

    clearCanvas();
    moveObjects();
    collisionDetect();

    for (let obj in objArray) {
        objArray[obj].draw();
    }

    lastTime = currentTime;
    window.requestAnimationFrame(draw);
}


draw();

function wallCollision(circle) {
    if (circle.x - circle.radius + circle.dx < 0 ||
        circle.x + circle.radius + circle.dx > canvas.width) {
        circle.dx *= -1;
    }
    if (circle.y - circle.radius + circle.dy < 0 ||
        circle.y + circle.radius + circle.dy > canvas.height) {
        circle.dy *= -1;
    }
    if (circle.y + circle.radius > canvas.height) {
        circle.y = canvas.height - circle.radius;
    }
    if (circle.y - circle.radius < 0) {
        circle.y = circle.radius;
    }
    if (circle.x + circle.radius > canvas.width) {
        circle.x = canvas.width - circle.radius;
    }
    if (circle.x - circle.radius < 0) {
        circle.x = circle.radius;
    }
}
