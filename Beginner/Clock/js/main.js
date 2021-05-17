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

    var greeting

    if (hours < 8) {
        greeting = "Good Morning " + name + " Time to go to work!";
    }
    if (hours >= 8 && hours < 12) {
        greeting = "Good Morning " + name + " Have a great day";
    }

    if (hours >= 12 && hours <= 14) {
        greeting = "Good Afternoon " + name + " I hope you are off to lunch";
    }
    if (hours > 14 && hours < 17) {
        greeting = "Good Afternoon " + name + " I hope your lunch was great";
    }

    if (hours >= 17 && hours < 19) {
        greeting = "Good Evening " + name;
    }

    if (hours >= 19 && hours <= 24) {
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