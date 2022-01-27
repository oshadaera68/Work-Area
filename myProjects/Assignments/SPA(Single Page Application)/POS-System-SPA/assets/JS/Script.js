/**
 *Powered By:MINDARTLK.
 *version:v0.1.0
 **/

document.getElementById("customerpage").style.display="none";
document.getElementById("itempage").style.display="none";

//home btn
document.getElementById("homeBtn").addEventListener("click",function () {
    document.getElementById("customerpage").style.display="none";
    document.getElementById("itempage").style.display="none";
    document.getElementById("homepage").style.display="block";
});

//customer btn
document.getElementById("customerBtn").addEventListener("click",function () {
    document.getElementById("homepage").style.display="none";
    document.getElementById("itempage").style.display="none";
    document.getElementById("customerpage").style.display="block";
});

//item btn
document.getElementById("itemBtn").addEventListener("click",function () {
    document.getElementById("homepage").style.display="none";
    document.getElementById("customerpage").style.display="none";
    document.getElementById("itempage").style.display="block";
});