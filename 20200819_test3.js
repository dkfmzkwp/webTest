window.onload = function(){
    var theDay = document.getElementById('theDay');
    var today = document.getElementById('today');
    var result = document.getElementById('result');
}
function getCal(){
    var from = new Date(theDay.value);
    var to = new Date(today.value);
    var calc = to - from;
    var day = Math.floor(calc / (24 * 60 * 60 * 1000));
    result.value = "올해는 " + day + "일 지났습니다.";
}