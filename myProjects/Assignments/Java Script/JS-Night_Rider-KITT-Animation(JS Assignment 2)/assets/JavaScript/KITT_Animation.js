/**
 *Powered By:MINDARTLK.
 *version:v0.1.0
**/

var divColors=["#ff0000", "#ff3333", "#ff5c5c", "#ff7575", "#ff9999", "#fac3c3"];
var divIds=[$("#d1"),$("#d2"),$("#d3"),$("#d4"),$("#d5"),$("#d6")];

function makeArray() {

}

function clearColor() {
    for (var i = 0; i < divIds.length; i++) {
        divIds[i].css("background-color", "white");
    }
}
let IntervalX;
var i= 0;
function forward() {
    clearColor();
    divIds[i].css("background-color", divColors[0]);
    i++;
    if (i == 6) {
        i=0;
        clearInterval(intervalF);
        IntervalX = setInterval(backward,300);
    }
}


x = 5
function backward() {
    clearColor();
    divIds[x].css("background-color", divColors[0]);
    x--;
    if (x == -1) {
        x=5;
        clearInterval(IntervalX);
        start();
    }
}
function start() {
    intervalF = setInterval(forward, 300);
}
let intervalF = setInterval(forward, 300);