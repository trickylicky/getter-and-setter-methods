// Add your Circle class here
const PI = Math.PI;
class Circle {
    constructor(radius) { this.radius = radius }

    get diameter() { return this.radius * 2 }
    get area() { return (this.radius * this.radius) * PI }
    get circumference() { return this.diameter * PI }

    set diameter(diameter) { this.radius = diameter / 2 }
    set circumference(circumference) { this.radius = circumference / (2 * PI) }
    set area(area) { this.radius = Math.sqrt(area / PI) }
}