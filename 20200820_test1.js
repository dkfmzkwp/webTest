
var selectWeb = document.selectForm;
var select = selectWeb.choice.selectedIndex;

document.selectForm.choice.selectedIndex = 0;

function goWeb(selectedIndex){
    switch(selectedIndex){
        case 1 : window.open("http://www.naver.com");
        break;
        case 2 : window.open("http://www.daum.net");
        break;
        case 3 : window.open("http://www.nate.com");
        break;
    }
}
