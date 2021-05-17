var name = prompt("Please enter your name", "Anonymous");
const clock = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    midday = (hours >= 12) ? "PM" : "AM";

    document.getElementById("clock").innerHTML =
        "<span>" + hours + "</span>" + ":" + "<span>" + minutes + "</span>" + ":" + "<span>" + seconds + "</span>" + "<span>" + midday + "</span>";

    var time = setTimeout(function () {
        clock();
    }, 1000);

    //   Good Morning and Good Night Conditions
    var greeting
    if (hours < 12) {

        greeting = "Good Morning " + name + " Hurry Up!";
    }

    if (hours >= 12 && hours <= 18) {
        greeting = "Good Afternoon " + name;
    }

    if (hours >= 18 && hours <= 24) {
        greeting = "Good Evening " + name;
    }

    document.getElementById("greetings").innerHTML = greeting;
}

const updateTime = (k) => {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}
clock();