/**
 *Powered By:MINDARTLK.
 *version:v0.1.0
 **/

const car = ["A", "B", "C", "D", "E", "F"];


setInterval(drive, 500)


function drive() {
    var i = 0;
    var top = car[i];

    while (i < car.length) {

        if (i == 5) {
            car[i] = top;

        } else {
            car[i] = car[i + 1];

        }

        i++;
    }


    var count = 0;

    $('#one').text(car[count++]);  //0
    $('#two').text(car[count++]);  //1
    $('#three').text(car[count++]); //2
    $('#four').text(car[count++]); // 3
    $('#five').text(car[count++]); // 4
    $('#six').text(car[count]);  // 5

}