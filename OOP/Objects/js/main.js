const circle = {

    radius: 1,

    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('drawing');
    }
};

document.getElementById("greetings").innerHTML = "The circle with <br> Radius =  " + circle.radius + " <br>  Location :  X = " + circle.location.x + " ,Y =" + circle.location.y;