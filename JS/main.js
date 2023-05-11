// Bài 1

var countSalary1 = document.getElementById("countSalary1");

countSalary1.onclick = function(){
    var workingDay1 = document.getElementById("workingDay1").value;
    var salaryofDay1 = document.getElementById("salaryofDay1").value;
    var count1;
    count1 = workingDay1 * salaryofDay1;
    document.getElementById("results1").innerHTML = count1;
}
