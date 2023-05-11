// Bài 2

var countaverageValue = document.getElementById("countaverageValue");

countaverageValue.onclick = function(){
    var averageValue1 = document.getElementById("averageValue1").value;
    var averageValue2 = document.getElementById("averageValue2").value;
    var averageValue3 = document.getElementById("averageValue3").value;
    var averageValue4 = document.getElementById("averageValue4").value;
    var averageValue5 = document.getElementById("averageValue5").value;
    averageValue1 = parseFloat(averageValue1);
    averageValue2 = parseFloat(averageValue2);
    averageValue3 = parseFloat(averageValue3);
    averageValue4 = parseFloat(averageValue4);
    averageValue5 = parseFloat(averageValue5);
    var averageValue;
    averageValue = (averageValue1 + averageValue2 + averageValue3 + averageValue4 + averageValue5) / 5;
    document.getElementById("results2").innerHTML = averageValue;
}
