var sumofNumber = document.getElementById("sumofNumber");

sumofNumber.onclick = function(){
    var getNumber = document.getElementById("getNumber").value;
    var units;
    var dozens;
    var sum;
    units = getNumber % 10;
    dozens = getNumber / 10;
    sum = units + dozens;
    sum = parseInt(sum);
    document.getElementById("resultsofSum").innerHTML = sum;
}