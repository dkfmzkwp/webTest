$(function () {
  //객체참조변수 선언
  var container = $(".container");
  //가장 상위 클래스를 선언함으로써 하위 클래스들은 따로 선언할필요없이 .find 로 찾을수있다.
  var slideGroup = container.find(".container_slides");
  var slides = slideGroup.find("a"); //배열로 가져온다
  var slideCount = slides.length;
  //화살표
  var nav = container.find(".container_nav");
  var prev = nav.find('.prev');
  var next = nav.find('.next');
  //인디케이터
  var indicator = container.find(".container_indicator");
  var aIndicator = indicator.find("a") //배열[a] 길이 4

  var currentIndex = -1;
  var intervalObject;

  //===================================================

  //자동으로 넘어가는 이미지 슬라이드 구현

  //1.이미들을 가로로 배치
  // for (var index = 0;index<slides.length;index++){
  //   var indexLeft = index * 100 + "%";
  //   slides.eq(index).css("left",indexLeft);
  // }
  //JQuery
  slides.each(function (i) {
    var newLeft = i * 100 + "%";
    $(this).css({ left: newLeft });
  });

  //자동으로 애니메이션으로 보이는 방법 구현
  function gotoSlide(index) {
    //애니메이션 주는 방법 객체 .animate(구현내용,걸리는시간,보여주는방법)
    //구현내용 : left: 0%, -100%, -200%, -300%
    //걸리는시간 : 1초
    //보여주는 방법 : 한칸씩 옆으로 이동
    slideGroup.animate({ left: -100 * index + "%" }, 300, 'swing');

    indexDisplay(index);
  }

  //인터벌 설정함수
  function startTimer() {
    intervalObject = setInterval(function () {
      var nextIndex = (currentIndex + 1) % slides.length;
      currentIndex = nextIndex;
      gotoSlide(nextIndex);
    }, 3500);
  }
  //인터벌 종료 함수
  function stopTimer() {
    clearInterval(intervalObject);
  }

  //이미지에 마우스를 올렸을때 자동 슬라이드 멈춤
  container.mouseenter(function () {
    stopTimer();
  });
  //마우스를 치웠을때 슬라이드 재시작
  container.mouseleave(function () {
    startTimer();
  });

  //좌우 화살표 표시 설정
  function indexDisplay(index){
    //index : 0번일때 왼쪽화살표 가림 오른쪽 보임
    //index : 3번일때 오른쪽화살표 가림 왼쪽 보임
    switch (index) {
        case 0:
            prev.hide();
            next.show();
            break;

        case 1:
        case 2:
        case 3:
            prev.show();
            next.show();
            break;

        case 4:
            next.hide();
            prev.show();
            break;
    }
    //인디케이터를 배경화면을 세팅한다
    aIndicator.removeClass('active');
    aIndicator.eq(index).addClass('active');
}

//이전 화살표 클릭 이벤트
prev.on("click",function(){
  if(currentIndex !== 0){
    currentIndex -= 1;
  }else{
    currentIndex = 0;
  }
  gotoSlide(currentIndex);
});
//다음 화살표 클릭 이벤트
next.on("click",function(){
  if(currentIndex !== slides.length -1){
    currentIndex += 1;
  }else{
    currentIndex = slides.length -1;
  }
  gotoSlide(currentIndex);
});
//인디케이터 클릭시 이벤트
aIndicator.on("click",function(){
  gotoSlide($(this).index());
});
  //맨처음 진행시 초기화 시켜야할 필요성 떄문에 진행함.
  indexDisplay(0);
  startTimer();
});