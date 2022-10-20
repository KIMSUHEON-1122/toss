//go_to_down
/* $(".go_to_down, .go_to_down_inner::before, .go_to_down_inner::after").on("click",function(){
  console.log("down클릭");
}); */

// AOS

AOS.init();
var x=1;
var func1 = setInterval(function(){
    if(x<26){
        color1(x);
        x++;
    } else if(x<70){
        color2(x);
        x++;
    } else if(x<101){
        color3(x);
        x++;
    } else {
        x = 1;
    }
},15);



function color1(x){
$(".pie-chart").css({
    "background":"conic-gradient(#0099ff 0% "+x+"%, #ffffff "+x+"% 100%)"
    });

}
function color2(x){
$(".pie-chart").css({
    "background":"conic-gradient(#0099ff 0% 25%, #f582c6 25% "+x+"%, #ffffff "+x+"% 100%)"
    });
 
}
function color3(x){
$(".pie-chart").css({
    "background":"conic-gradient(#0099ff 0% 25%, #f582c6 25% 70%, #00cdcd 70% "+x+"%, #ffffff "+x+"% 100%)"
    });
 
}

//스크롤 애니메이션
$(window).on('load resize', function() {
  const elDown = document.querySelector(".go_to_down_inner");

  if($(window).width() > 719){
      $("html,body").on('mousewheel DOMMouseScroll getScrollPoistion', function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
          }
          else if (event.detail)
            delta = -event.detail / 3;
          var moveTop = $(window).scrollTop();
      
          if (delta < 0) {//마우스 휠을 위에서 아래로
            moveTop = moveTop + 640;
      
          }
          else { //마우스 휠을 아래에서 위로
            moveTop = moveTop - 640;
          }
          // 부드럽게 내려가기
          $("html, body").stop().animate({
            scrollTop: moveTop + 'px'
          }, {
            duration: 600, complete: function () {
            }
          });
          if(moveTop<10){
            elDown.style.transform = "rotate(0deg)"
          }
          if(moveTop>4700){
            elDown.style.transform = "rotate(180deg)"
          }
        });
        
        $(".go_to_down_inner").on("load click",function(){
          var moveTop = $(window).scrollTop();
          if(moveTop<10){
            elDown.style.transform = "rotate(0deg)"
          }
          console.log("down클릭");
          console.log('moveTop',moveTop);
          
          if(moveTop>4700){
            console.log("돌려");
            elDown.style.transform = "rotate(180deg)"
            $("html, body").stop().animate({
              scrollTop: 0 + 'px'
            }, {
              duration: 600, complete: function () {
              }
            });
          }
          else{
            moveTop = moveTop + 640;
            
            $("html, body").stop().animate({
              scrollTop: moveTop + 'px'
            }, {
              duration: 600, complete: function () {
              }
            });
          }
          }
          );  
//random 금액 효과

        const elCont = document.querySelectorAll(".asset_count");
      let i = 0;

      function random() {
          elCont[0].textContent = `${(Math.floor(Math.random() * 1000))},${(Math.floor(Math.random() * 1000))}`
          elCont[1].textContent = `${(Math.floor(Math.random() * 1000))},${(Math.floor(Math.random() * 1000))}`
          elCont[2].textContent = `${(Math.floor(Math.random() * 1000))},${(Math.floor(Math.random() * 1000))}`
          
          i = i + 1;
      }
      setInterval(function () {
          random();
      }, 150)
  }
});

// popup 애니메이션
  const elP = document.querySelector(".first_popup_ment");
      let num = 0;
      let intro = "새로운 차원의 금융을 만나다.";

      function typing() {
          if (num >= intro.length){
              num = 0;
              elP.textContent = "";    
              // clearInterval(interval);
          }
          elP.textContent = elP.textContent + intro[num];
          num++;
      }
      let interval = setInterval(function () {
          typing();
      }, 200)

  const elDiv = document.querySelectorAll(".first_popup_app_wrap a")
      setTimeout(function(){
          elDiv[0].setAttribute("class", "");
          elDiv[1].setAttribute("class", "");
          $(".first_popup span").css("display", "block");
      },4000)
  $(".first_popup span").on("click", function(){
      $(".first_popup").css("display","none");
  });

// 모바일 햄버거 메뉴

$(".mobile_hamburger_wrap, .mobile_hamburger_wrap::before, .mobile_hamburger_wrap::after").on("click",function(){
  $(".mobile_nav").slideToggle(600);
  
});
// 10월 인기카드 효과
const elOpt = document.querySelectorAll(".select_wrap option")
const elCardImg = document.querySelector(".select_wrap img")
let cardNum = 0;

function runCard() {
  if (cardNum > 0) {
      elOpt[cardNum - 1].removeAttribute("selected");
  }
  if (cardNum == 10) {
      cardNum = 0;
  }
  if (cardNum >= 0 || cardNum < 10) {
      elOpt[cardNum].setAttribute("selected", true);
      // 카드이미지 효과
      elCardImg.setAttribute("src", "img/" + cardNum + ".png")
      cardNum++;
  }

}
setInterval(function () {
  runCard();
}, 1500)

// hover효과
let remitText = document.querySelector(".remit a").innerText;

$(".remit a").hover(function(){
  $(this).stop().text("지금 토스계좌 만들기");
}, function(){
  $(this).stop().text(remitText);
});

let buyText = document.querySelector(".buying").innerText;
$(".buying a").hover(function(){
  $(this).stop().text("해외주식 계좌 만들기");
}, function(){
  $(this).stop().text(remitText);
});

//하트 누르기
$(".heart").on("click", function(){
  
},function(){

})


// 토스 pick slide
$(".pick_wrap").slick({

  infinite: true, //무한반복
  slidesToShow: 4, //한 화면에 보여질 컨텐츠
  slidesToScroll: 1, //스크롤 한번에 움직일
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true, //hover시 슬라이더 멈춤
  draggable: true,
  arrows: false,

  responsive: [
      {
          breakpoint: 1850,
          settings: {
              slidesToShow: 3,
              arrows: false,
              autoplay: true,
          }
      },
      {
          breakpoint: 1000,
          settings: {
              slidesToShow: 2,
              autoplay: true,
              arrows: false,
          }
      },
      {
          breakpoint: 719,
          settings: {
              slidesToShow: 1,
              autoplay: false,
              arrows: false,
          }
      }
  ]
});

/* var slider = $('.slider');  	
var tablet_slickOptions = { 		
  infinite: true, 		
  slidesToShow: 5, 		
  slidesToScroll: 1, 		
  dots:false, 		
  arrows:false,
  draggable: true,
};
var mobile_slickOptions = { 		
  infinite: true, 		
  slidesToShow: 3, 		
  slidesToScroll: 1, 		
  dots:false, 		
  arrows:false,
  draggable: true,
};   	
$(window).on('load resize', function() { 		
  if($(window).width() < 719){
      slider.not('.slick-initialized').slick(mobile_slickOptions); 		
  }
  else if($(window).width() < 1200){
      slider.not('.slick-initialized').slick(tablet_slickOptions); 		
  }
  else{
      slider.slick('unslick'); 		
  }
  // resize될때마다 reload되는 방법
}); */

 