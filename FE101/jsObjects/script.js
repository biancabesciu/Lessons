/**
 * Created by Bianca on 24/08/2017.
 */
function Square(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
}

function Circle(radius, color) {
    this.radius = radius;
    this.color = color;
}

const shapes = [
    new Square (200, 200, 'orange'),
    new Circle (50, 'purple')
];

function drawShapes () {
    const container = document.getElementById('container');

    for (const shape of shapes) {

        const element = document.createElement('div');
        element.className = 'shape' +
        this.constructor.name.toLowerCase();

        if (this.constructor.name === 'Square') {
            
        }
    }
}

drawShapes();