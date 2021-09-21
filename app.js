var counter = 0;
var colour = "black";
document.getElementById("header").textContent = counter;

function changes(parameter) {
    (parameter == 'increase') ? counter++ : (parameter == "decrease") ? counter-- : counter = 0;
    (counter > 0) ? colour='green' : (counter < 0) ? colour = "red" : colour = "hsl(360, 0%, 30%)";
    document.getElementById("header").textContent = counter;
    document.getElementById("header").style.color = colour;
}