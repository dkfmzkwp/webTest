window.onload = function(){
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var date = document.getElementById('date');
    var day = document.getElementById('day');
    var hour = document.getElementById('hour');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
}

function getInfo(){
    var nowDate = new Date();
    //년도
    var yy = nowDate.getFullYear();
    year.value = yy;
    //월
    var mm = nowDate.getMonth()+1;
    month.value =mm;
    //일
    var dd = nowDate.getDate();
    date.value = dd;
    //요일
    var days = ["일","월","화","수","목","금","토"];
    var i = nowDate.getDay();
    day.value = days[i];
    //시
    var hh = nowDate.getHours();
    hour.value = hh;
    //분
    var mi = nowDate.getMinutes();
    min.value = mi;
    //초
    var ss = nowDate.getSeconds();
    sec.value = ss;
    
}