var count = prompt("Enter A Number Less than 100 to use in the loop", 0);

function error() {
    alert("Wrong inputs");
    return false;

}

function sucess() {
    document.getElementById("greetings").innerHTML = "Loop Started <br>"


    while (count <= 100) {

        document.getElementById("greetings").append("Current Count is : " + count);
        // document.getElementById("greetings").appendChild("br");

        count++;

    }
    document.getElementById("greetings").append("Loop Ended");

}


count < 0 || count > 100 || isNaN(count) ? error() : sucess();





