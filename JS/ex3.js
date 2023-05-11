// Bài 3
var countMoney = document.getElementById("countMoney");

countMoney.onclick = function(){
    var getMoney = document.getElementById("getMoney").value;
    var money = 23500;
    var sumofMoney;
    sumofMoney = money * getMoney;
    document.getElementById("results3").innerHTML = new Intl.NumberFormat('vn-VN').format(sumofMoney);
}