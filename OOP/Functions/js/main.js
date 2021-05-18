//Factory function
function createCirce(radius) {
    return {
        radius,
        draw: function () {
            document.getElementById("circle").innerHTML = "objects using a function <br/> circle radius = " + radius;
        }
    };
}

const circle = createCirce(1);
circle.draw();

// Constructor Function


function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        document.getElementById("circle2").innerHTML = "Drawing the second circle with radius " + radius;
    };
}

const circle2 = new Circle(2);
circle2.draw();
