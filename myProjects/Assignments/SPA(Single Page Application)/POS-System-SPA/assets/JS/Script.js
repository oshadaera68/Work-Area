/**
 *Powered By:MINDARTLK.
 *version:v0.1.0
 **/

document.getElementById("customerpage").style.display = "none";
document.getElementById("itempage").style.display = "none";

//home btn
document.getElementById("homeBtn").addEventListener("click", function () {
    document.getElementById("customerpage").style.display = "none";
    document.getElementById("itempage").style.display = "none";
    document.getElementById("homepage").style.display = "block";
});

//customer btn
document.getElementById("customerBtn").addEventListener("click", function () {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("itempage").style.display = "none";
    document.getElementById("customerpage").style.display = "block";
});

//item btn
document.getElementById("itemBtn").addEventListener("click", function () {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("customerpage").style.display = "none";
    document.getElementById("itempage").style.display = "block";
});

// customer form
$("#addCustomer").click(function () {
    let cusId = $("#id").val();
    let cusName = $("#name").val();
    let cusAddress = $("#address").val();
    let cusTP = $("#tpNum").val();

    $("input").val("");

    let row = `<tr><td>${cusId}</td><td>${cusName}</td><td>${cusAddress}</td><td>${cusTP}</td></tr>`;

    $("#tableCus").append(row);


    /*$(cusId).val().remove();*/
    let table = document.getElementsByTagName('table');
    $("#tableCus>tr").click(function () {
        /*console.log(this);*/

    });
});

// item form
$("#addItem").click(function () {
    let itemId = $("#itemId").val();
    let itemName = $("#itemName").val();
    let itemQty = $("#qty").val();
    let itemUnitPrice = $("#uPrice").val();

    $("input").val("");

    let row1 = `<tr><td>${itemId}</td><td>${itemName}</td><td>${itemQty}</td><td>${itemUnitPrice}</td>`;
    $("#tableItem").append(row1);
});