// Bài 4

var countNumber = document.getElementById("countNumber");

countNumber.onclick = function(){
    var getLength = document.getElementById("getLength").value;
    var getWidth = document.getElementById("getWidth").value;
    var Acreage;
    var Perimeter;
    Acreage = getLength * getWidth;
    Perimeter = getLength + getWidth * 2

    document.getElementById("resultsAcreage").innerHTML = "Diện tích là" + Acreage
    document.getElementById("resultsPerimeter").innerHTML ="Chu vi là"  + Perimeter
}