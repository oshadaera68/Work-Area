/**
 *Powered By:MINDARTLK.
 *version:v0.1.0
 **/

function animateColors() {
    let colour1 = $("section>div:nth-child(1)").css('background-color');
    let colour2 = $("section>div:nth-child(2)").css('background-color');
    let colour3 = $("section>div:nth-child(3)").css('background-color');
    let colour4 = $("section>div:nth-child(4)").css('background-color');
    let colour5 = $("section>div:nth-child(5)").css('background-color');

    $("section>div:nth-child(1)").css('background-color',colour2);
    $("section>div:nth-child(2)").css('background-color',colour3);
    $("section>div:nth-child(3)").css('background-color',colour4);
    $("section>div:nth-child(4)").css('background-color',colour5);
    $("section>div:nth-child(5)").css('background-color',colour1);

}

let timerId
$("#btnStart").click(function () {
    clearInterval(timerId);
    timerId =   setInterval(animateColors,100);
});

$("#btnStop").click(function () {
    clearInterval(timerId);
});