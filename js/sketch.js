let sketch1 = new p5(( sketch ) => {
    let walls = [];
    let particle1;
    let particle2;
    let particle3;

    sketch.setup = () => {
        canvas = sketch.createCanvas(400, 400);
        const width = sketch.width
        const height = sketch.height
        // Walls around perimeter
        walls.push(new Boundary(sketch, 0, 0, width, 0));
        walls.push(new Boundary(sketch, width, 0, width, height));
        walls.push(new Boundary(sketch, width, height, 0, height));
        walls.push(new Boundary(sketch, 0, height, 0, 0));
    
        // Building demo, all in terms of width/height to be scalable
        walls.push(new Boundary(sketch, 0, height/7, width, height/7));
    
        walls.push(new Boundary(sketch, 0, 2 * height/7, width/7, 2 * height/7));
        walls.push(new Boundary(sketch, width/7, 2 * height/7, width/7, height));
    
        walls.push(new Boundary(sketch, 6 * width/7, 3 * height/7, width, 3 * height/7));
        walls.push(new Boundary(sketch, 6 * width/7, 3 * height/7, 6 * width/7, height));
    
        walls.push(new Boundary(sketch, width/4 - width/80, 6 * height/7, width/4 - width/80, height));
        walls.push(new Boundary(sketch, width/4 - width/80, 6 * height/7, 3 * width/4 + width/80, 6 * height/7));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, 6 * height/7, 3 * width/4 + width/80, height));
    
        walls.push(new Boundary(sketch, width/4 - width/80, 4 * height/7 + height/20, width/4 - width/80, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, width/4 - width/80, 5 * height/7 + height/20, 11 * width/20, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 11 * width/20, 4 * height/7 + height/20, 11 * width/20, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, width/4 - width/80, 4 * height/7 + height/20, 11 * width/20, 4 * height/7 + height/20));
    
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, height/2, 3 * width/4 + width/80, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 5 * width/8 - width/60, height/2, 5 * width/8 - width/60, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, height/2, 5 * width/8 - width/60, height/2));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, 5 * height/7 + height/20, 5 * width/8 - width/60, 5 * height/7 + height/20));
    
        walls.push(new Boundary(sketch, 4 * width/10, 2 * height/7, width/2, 2 * height/7));
        walls.push(new Boundary(sketch, 4 * width/10, 2 * height/7, 4 * width/10, height/10 + 2 * height/7));
        walls.push(new Boundary(sketch, width/2, 2 * height/7, width/2, height/10 + 2 * height/7));
        walls.push(new Boundary(sketch, 4 * width/10, height/10 + 2 * height/7, width/2, height/10 + 2 * height/7));
    
        // Setting up particles
        particle1 = new Particle(sketch, 230, 148, walls, [4, 139, 168, 51]);
        particle2 = new Particle(sketch, 70, 200, walls, [92, 173, 72, 51]);
        particle3 = new Particle(sketch, 150, 256, walls, [243, 91, 4, 51]);
    }

    sketch.draw = () => {
        sketch.background(255);
        for (let i = 0; i < walls.length; i++) {
            walls[i].show();
        }
        
        // Load in particle logic
        particle1.show();
        particle1.look();
        particle2.show();
        particle2.look();
        particle3.show();
        particle3.look();
    }
}, document.querySelector('#midas-canvas-1'));

let sketch2 = new p5(( sketch ) => {
    let walls = [];
    let particle1;
    let particle2;
    let particle3;

    sketch.setup = () => {
        canvas = sketch.createCanvas(300, 300);
        const width = sketch.width
        const height = sketch.height
        // Walls around perimeter
        walls.push(new Boundary(sketch, 0, 0, width, 0));
        walls.push(new Boundary(sketch, width, 0, width, height));
        walls.push(new Boundary(sketch, width, height, 0, height));
        walls.push(new Boundary(sketch, 0, height, 0, 0));
    
        // Building demo, all in terms of width/height to be scalable
        walls.push(new Boundary(sketch, 0, height/7, width, height/7));
    
        walls.push(new Boundary(sketch, 0, 2 * height/7, width/7, 2 * height/7));
        walls.push(new Boundary(sketch, width/7, 2 * height/7, width/7, height));
    
        walls.push(new Boundary(sketch, 6 * width/7, 3 * height/7, width, 3 * height/7));
        walls.push(new Boundary(sketch, 6 * width/7, 3 * height/7, 6 * width/7, height));
    
        walls.push(new Boundary(sketch, width/4 - width/80, 6 * height/7, width/4 - width/80, height));
        walls.push(new Boundary(sketch, width/4 - width/80, 6 * height/7, 3 * width/4 + width/80, 6 * height/7));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, 6 * height/7, 3 * width/4 + width/80, height));
    
        walls.push(new Boundary(sketch, width/4 - width/80, 4 * height/7 + height/20, width/4 - width/80, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, width/4 - width/80, 5 * height/7 + height/20, 11 * width/20, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 11 * width/20, 4 * height/7 + height/20, 11 * width/20, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, width/4 - width/80, 4 * height/7 + height/20, 11 * width/20, 4 * height/7 + height/20));
    
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, height/2, 3 * width/4 + width/80, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 5 * width/8 - width/60, height/2, 5 * width/8 - width/60, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, height/2, 5 * width/8 - width/60, height/2));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, 5 * height/7 + height/20, 5 * width/8 - width/60, 5 * height/7 + height/20));
    
        walls.push(new Boundary(sketch, 4 * width/10, 2 * height/7, width/2, 2 * height/7));
        walls.push(new Boundary(sketch, 4 * width/10, 2 * height/7, 4 * width/10, height/10 + 2 * height/7));
        walls.push(new Boundary(sketch, width/2, 2 * height/7, width/2, height/10 + 2 * height/7));
        walls.push(new Boundary(sketch, 4 * width/10, height/10 + 2 * height/7, width/2, height/10 + 2 * height/7));
    
        // Setting up particles
        particle1 = new Particle(sketch, 182, 148, walls, [4, 139, 168, 51]);
        particle2 = new Particle(sketch, 45, 84, walls, [92, 173, 72, 51]);
        particle3 = new Particle(sketch, 229, 256, walls, [243, 91, 4, 51]);
    }

    sketch.draw = () => {
        sketch.background(255);
        for (let i = 0; i < walls.length; i++) {
            walls[i].show();
        }
        
        // Load in particle logic
        particle1.show();
        particle1.look();
        particle2.show();
        particle2.look();
        particle3.show();
        particle3.look();
    }
}, document.querySelector('#midas-canvas-2'));

let sketch3 = new p5(( sketch ) => {
    let walls = [];
    let particle1;
    let particle2;
    let particle3;
    let particle4;
    let step = 0;
    let percent = document.querySelector('#percent-1')

    sketch.setup = () => {
        canvas = sketch.createCanvas(300, 300);
        const width = sketch.width
        const height = sketch.height
        // Walls around perimeter
        walls.push(new Boundary(sketch, 0, 0, width, 0));
        walls.push(new Boundary(sketch, width, 0, width, height));
        walls.push(new Boundary(sketch, width, height, 0, height));
        walls.push(new Boundary(sketch, 0, height, 0, 0));
    
        // Building demo, all in terms of width/height to be scalable
        walls.push(new Boundary(sketch, 0, height/7, width, height/7));
    
        walls.push(new Boundary(sketch, 0, 2 * height/7, width/7, 2 * height/7));
        walls.push(new Boundary(sketch, width/7, 2 * height/7, width/7, height));
    
        walls.push(new Boundary(sketch, 6 * width/7, 3 * height/7, width, 3 * height/7));
        walls.push(new Boundary(sketch, 6 * width/7, 3 * height/7, 6 * width/7, height));
    
        walls.push(new Boundary(sketch, width/4 - width/80, 6 * height/7, width/4 - width/80, height));
        walls.push(new Boundary(sketch, width/4 - width/80, 6 * height/7, 3 * width/4 + width/80, 6 * height/7));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, 6 * height/7, 3 * width/4 + width/80, height));
    
        walls.push(new Boundary(sketch, width/4 - width/80, 4 * height/7 + height/20, width/4 - width/80, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, width/4 - width/80, 5 * height/7 + height/20, 11 * width/20, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 11 * width/20, 4 * height/7 + height/20, 11 * width/20, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, width/4 - width/80, 4 * height/7 + height/20, 11 * width/20, 4 * height/7 + height/20));
    
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, height/2, 3 * width/4 + width/80, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 5 * width/8 - width/60, height/2, 5 * width/8 - width/60, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, height/2, 5 * width/8 - width/60, height/2));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, 5 * height/7 + height/20, 5 * width/8 - width/60, 5 * height/7 + height/20));
    
        walls.push(new Boundary(sketch, 4 * width/10, 2 * height/7, width/2, 2 * height/7));
        walls.push(new Boundary(sketch, 4 * width/10, 2 * height/7, 4 * width/10, height/10 + 2 * height/7));
        walls.push(new Boundary(sketch, width/2, 2 * height/7, width/2, height/10 + 2 * height/7));
        walls.push(new Boundary(sketch, 4 * width/10, height/10 + 2 * height/7, width/2, height/10 + 2 * height/7));
    
        // Setting up particles
        particle1 = new Particle(sketch, 256, 127, walls, [4, 139, 168, 51]);
        particle2 = new Particle(sketch, 45, 230, walls, [92, 173, 72, 51]);
        particle2.setOpacity(0);
        particle3 = new Particle(sketch, 229, 256, walls, [243, 91, 4, 51]);
        particle3.setOpacity(0);
        particle4 = new Particle(sketch, 256, 237, walls, [183, 68, 184, 51]);
        particle4.setOpacity(0);
    }

    sketch.draw = () => {
        sketch.background(255);
        for (let i = 0; i < walls.length; i++) {
            walls[i].show();
        }
        
        // Load in particle logic
        particle1.show();
        particle1.look();
        particle2.show();
        particle2.look();
        particle3.show();
        particle3.look();
        particle4.show();
        particle4.look();

        // Loop Animate
        setTimeout(() =>{
            if(step == 0){
                particle1.updatePos(256, 127)
                particle2.fade(255, .05);
                animateNum(percent, 93.96, .1, .1)
            }
            if(particle1.pos.x == 256 && particle1.pos.y == 127 && particle2.opacity == 255 && step == 0){
                step++;
            }
            if(step == 1){
                particle1.animate(182, 148, .04, .5);
                particle2.animate(45, 84, .04, .5);
                particle3.fade(255, .03);
                animateNum(percent, 98.52, .05, .1)
            }
            if(particle1.pos.x == 182 && particle1.pos.y == 148 && particle2.pos.x == 45 && particle2.pos.y == 84 && particle3.opacity == 255 && step == 1){
                step++;
            }
            if(step == 2){
                particle3.animate(175, 245, .1, .9);
                particle4.fade(255, .02);
                animateNum(percent, 98.87, .055, .01)
            }
            if(particle3.pos.x == 175 && particle3.pos.y == 245 && step == 2){
                step++;
            }
            if(step == 3){
                particle1.animate(45, 144, .04, .01);
                particle2.animate(15, 84, .04, .01);
                particle3.animate(166, 186, .04, .01);
                particle4.fade(255, .02);
                animateNum(percent, 99.14, .055, .01)
            }
            if(particle1.pos.x == 45 && particle1.pos.y == 144 && particle2.pos.x == 15 && particle2.pos.y == 84 && particle3.pos.x == 166 && particle3.pos.y == 186 && particle4.opacity == 255 && step == 3){
                step++;
            }
            if(step == 4){
                particle1.animate(256, 127, .04, .01);
                particle2.fade(0, .05);
                particle3.fade(0, .05);
                particle4.fade(0, .05);
                animateNum(percent, 69.24, .1, .1)
            }
            if(particle2.opacity == 0 && particle3.opacity == 0 && particle4.opacity == 0 && particle2.pos.x == 15 && particle2.pos.y == 84 && particle3.pos.x == 166 && particle3.pos.y == 186 && step == 4){
                step++;
            }
            if(step == 5){
                particle2.animate(45, 230, .1, .05);
                particle3.animate(229, 256, .1, .05);
            }
            if(particle2.pos.x == 45 && particle2.pos.y == 230 && particle3.pos.x == 229 && particle3.pos.y == 256 && particle2.opacity == 0 && particle3.opacity == 0 && particle4.opacity == 0 && step == 5){
                step = 0;
            }
        }, 2000)
    }
}, document.querySelector('#midas-canvas-3'));


















let sketch4 = new p5(( sketch ) => {
    let walls = [];
    let particle1;
    let particle2;
    let particle3;
    let particle4;
    let step = 0;
    
    sketch.setup = () => {
        canvas = sketch.createCanvas(300, 300);
        const width = sketch.width
        const height = sketch.height
        // Walls around perimeter
        walls.push(new Boundary(sketch, 0, 0, width, 0));
        walls.push(new Boundary(sketch, width, 0, width, height));
        walls.push(new Boundary(sketch, width, height, 0, height));
        walls.push(new Boundary(sketch, 0, height, 0, 0));
    
        // Building demo, all in terms a width/height to be scalable
        walls.push(new Boundary(sketch, 0, height/7, width, height/7));
    
        walls.push(new Boundary(sketch, 0, 2 * height/7, width/7, 2 * height/7));
        walls.push(new Boundary(sketch, width/7, 2 * height/7, width/7, height));
    
        walls.push(new Boundary(sketch, 6 * width/7, 3 * height/7, width, 3 * height/7));
        walls.push(new Boundary(sketch, 6 * width/7, 3 * height/7, 6 * width/7, height));
    
        walls.push(new Boundary(sketch, width/4 - width/80, 6 * height/7, width/4 - width/80, height));
        walls.push(new Boundary(sketch, width/4 - width/80, 6 * height/7, 3 * width/4 + width/80, 6 * height/7));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, 6 * height/7, 3 * width/4 + width/80, height));
    
        walls.push(new Boundary(sketch, width/4 - width/80, 4 * height/7 + height/20, width/4 - width/80, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, width/4 - width/80, 5 * height/7 + height/20, 11 * width/20, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 11 * width/20, 4 * height/7 + height/20, 11 * width/20, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, width/4 - width/80, 4 * height/7 + height/20, 11 * width/20, 4 * height/7 + height/20));
    
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, height/2, 3 * width/4 + width/80, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 5 * width/8 - width/60, height/2, 5 * width/8 - width/60, 5 * height/7 + height/20));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, height/2, 5 * width/8 - width/60, height/2));
        walls.push(new Boundary(sketch, 3 * width/4 + width/80, 5 * height/7 + height/20, 5 * width/8 - width/60, 5 * height/7 + height/20));
    
        walls.push(new Boundary(sketch, 4 * width/10, 2 * height/7, width/2, 2 * height/7));
        walls.push(new Boundary(sketch, 4 * width/10, 2 * height/7, 4 * width/10, height/10 + 2 * height/7));
        walls.push(new Boundary(sketch, width/2, 2 * height/7, width/2, height/10 + 2 * height/7));
        walls.push(new Boundary(sketch, 4 * width/10, height/10 + 2 * height/7, width/2, height/10 + 2 * height/7));
    
        // Setting up particles
        // particle1 = new Particle(sketch, 256, 127, walls, [4, 139, 168, 51]);
        // particle2 = new Particle(sketch, 45, 230, walls, [92, 173, 72, 51]);
        particle1 = new Particle(sketch, 182, 148, walls, [4, 139, 168, 51]);
        particle2 = new Particle(sketch, 45, 84, walls, [92, 173, 72, 51]);
        particle3 = new Particle(sketch, 229, 256, walls, [243, 91, 4, 51]);
        particle3.setOpacity(0);
        particle4 = new Particle(sketch, width/2, height/2, walls, [183, 68, 184, 51]);
    }

    sketch.draw = () => {
        sketch.background(255);
        for (let i = 0; i < walls.length; i++) {
            walls[i].show();
        }
    
        particle1.show();
        particle2.show();
        particle3.show();
        particle1.look();
        particle2.look();
        particle3.look();

        if(particle1.pos.x == 182 && particle1.pos.y == 148 && particle2.pos.x == 45 && particle2.pos.y == 84 && particle3.opacity == 0){
            step++;
        }
        if(step == 1){
            particle1.animate(256, 127, .04, .01);
            particle2.animate(45, 230, .04, .01);
            particle3.fade(255, .02);
        }

        if(particle1.pos.x == 256 && particle1.pos.y == 127 && particle2.pos.x == 45 && particle2.pos.y == 230 && particle3.opacity == 255){
            step--;
        }
        if(step == 0){
            particle1.animate(182, 148, .04, .01);
            particle2.animate(45, 84, .04, .01);
            particle3.fade(0, .02);
        }
    }
}, document.querySelector('#midas-canvas-4'));

// Function used to check if an element is on screen
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// Function used to change the percentage shown with a sensor graphic
function animateNum(numDOM, endNum, easing, threshold) {
    let currentNum = parseFloat(numDOM.innerHTML);
    let dNum = endNum - currentNum;
    let newNum;
    if(Math.abs(dNum) > threshold){
        newNum = dNum * easing + currentNum + .01
    }
    else{
        newNum = endNum
    }
    numDOM.innerHTML = newNum.toFixed(2)
}