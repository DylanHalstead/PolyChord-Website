class Particle{
    constructor(sketch, x, y, walls, rgba) {
        // Put particle in the middle of the canvas
        this.sketch = sketch;
        this.pos = this.sketch.createVector(x, y);
        this.rays = [];
        this.walls = walls;
        this.fov = this.sketch.radians(360);
        this.offset = this.sketch.radians(0);
        this.rgba = rgba;
        this.vertices = [];
        this.opacity = 255;
        this.updateRays();
    }

    // Adjust fov and orientation, used in parallel with limitView
    setFOV(fov, offset) {
        this.fov = sketch.radians(fov);
        this.offset = sketch.radians(offset);
    }

    limitView(){
        // let left = -1 * this.fov/2;
        // let right = this.fov/2;

        // let newRays = [];
        // let newRay;
        // for(let ray of this.rays){
        //     if(ray.angle < right && ray.angle > left) {
        //         newRay = new Ray(this.pos, ray.angle + this.offset)
        //         newRays.push(newRay);
        //     }
        // }
        // if(this.fov != radians(360)){
        //     newRays.push(new Ray(this.pos, left + this.offset));
        //     newRays.push(new Ray(this.pos, right + this.offset));
        // }
        // this.rays = newRays;
        // this.rays.sort(function(a, b){
        //     return a.angle > b.angle;
        // })
    }

    // Checks for what wall is closest to ray, finds the intersection, and therefore stops ray at said wall
    look () {
        this.vertices = [];
        // Limit view based on fov amount
        this.limitView();
        for (let i = 0; i < this.rays.length; i++) {
            let closest = null;
            let record = Infinity;
            for (let wall of this.walls){
                const pt = this.rays[i].cast(wall);
                if (pt) {
                    // Calculate distance between wall and ray
                    const d = p5.Vector.dist(this.pos, pt);
                    // Store closest wall's position
                    if(d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                // Make Polygon to show casted area
                this.vertices.push([closest.x, closest.y]);
            }
        }
        this.drawPolygon();
    }

    updatePos(x, y) {
        this.pos.set(x, y);
        this.updateRays();
    }

    drawPolygon() {
        this.sketch.beginShape();
        this.sketch.stroke(255, 255, 255, 25 * (this.opacity/255));
        this.sketch.fill(this.rgba[0], this.rgba[1], this.rgba[2], this.rgba[3] * (this.opacity/255));
        for(let v of this.vertices){
            this.sketch.vertex(v[0], v[1])
        }
        this.sketch.vertex(this.vertices[0][0], this.vertices[0][1]);
        this.sketch.endShape(this.sketch.CLOSE)
    }

    updateRays() {
        this.rays = [];
        for (let wall of this.walls) {
            // Find the angle from the particle to a boundary's endpoints
            let angle = Math.atan2(wall.a.y-this.pos.y,wall.a.x-this.pos.x);
            this.rays.push(new Ray(this.sketch, this.pos, angle));
            this.rays.push(new Ray(this.sketch, this.pos, angle+0.0001));
            this.rays.push(new Ray(this.sketch, this.pos, angle-0.0001));
            angle = Math.atan2(wall.b.y-this.pos.y,wall.b.x-this.pos.x);
            this.rays.push(new Ray(this.sketch, this.pos, angle));
            this.rays.push(new Ray(this.sketch, this.pos, angle+0.0001));
            this.rays.push(new Ray(this.sketch, this.pos, angle-0.0001));
            // Make sure all Rays are sorted by angle
            this.rays.sort(function(a, b){
                return a.angle > b.angle;
            })
        }
    }

    show() {
        this.sketch.stroke(this.rgba[0], this.rgba[1], this.rgba[2], this.opacity);
        this.sketch.fill(this.rgba[0], this.rgba[1], this.rgba[2], this.opacity);
        this.sketch.ellipse(this.pos.x, this.pos.y, 8);
    }

    animate(endX, endY, easing, threshold){
        let startX = this.pos.x;
        let dx = endX - startX;
        let newX;
        if(Math.abs(dx) > threshold){
            newX = dx * easing + startX;
        }
        else {
            newX = endX;
        }
    
        let startY = this.pos.y;
        let dy = endY - startY;
        let newY;
        if(Math.abs(dy) > threshold){
            newY = dy * easing + startY;
        }
        else{
            newY = endY;
        }
        this.updatePos(newX, newY);
    }

    setOpacity(o){
        this.opacity = o;
    }

    fade(endOpacity, easing){
        let startOpacity = this.opacity;
        let dOpacity = endOpacity - startOpacity;
        let newO;
        if(Math.abs(dOpacity) > .25){
            newO = dOpacity * easing + startOpacity
        }
        else{
            newO = endOpacity
        }
        this.opacity = newO;
    }
}