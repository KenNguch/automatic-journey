var count = prompt("Enter A Number to use in the loop", 0);

document.write("Loop Started");

while (count < 10) {
    document.getElementById("greetings").innerHTML = "Current Count is : " + count + "<br />";
    count++;

}
document.write("The End")