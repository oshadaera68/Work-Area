/**
 *Powered By:MINDARTLK.
 *version:v0.1.0
 **/

const color = ["yellow", "blue", "green", "red", "pink", "coral"]

setInterval(light, 500);

function light() {
    var i = 0;
    var top = color[0];

    while (i < 6) {
        if (i == 5) {
            color[5] = top;
        } else {
            color[i] = color[i + 1];
        }
        i++;
    }

    var count = 0;

    $('#six').css('background-color', color[count++]);
    $('#five').css('background-color', color[count++]);
    $('#four').css('background-color', color[count++]);
    $('#three').css('background-color', color[count++]);
    $('#two').css('background-color', color[count++]);
    $('#one').css('background-color', color[count]);

}