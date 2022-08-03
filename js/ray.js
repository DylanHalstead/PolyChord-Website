class Ray {
    constructor(sketch, pos, angle) {
        this.sketch = sketch;
        this.pos = pos;
        // Store angle for sorting Ray array
        this.angle = angle;
        // Function creates vector based on angle 
        this.dir = p5.Vector.fromAngle(angle);
    }

    // Show the ray on the canvas
    // show() {
    //     stroke(255);
    //     push();
    //     translate(this.pos.x, this.pos.y);
    //     pop();
    // }

    // Find where ray intersects with boundary, if at all
    cast(wall) {
        // Wall's endpoints
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;

        // Ray's endpoints
        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line_segment
        // https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
        // Check for 0 in denominator
        const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (denom == 0) {
            return;
        }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
        const u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / denom;
        if (t > 0 && t < 1 && u > 0){
            const pt = this.sketch.createVector();
            pt.x = x1 + t * (x2 - x1);
            pt.y = y1 + t * (y2 - y1);
            return pt;
        } else {
            return;
        }
    }
}