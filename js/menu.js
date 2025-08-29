$(function () {
  // console.log("시작");
  // 1. .slideDown() / .slideUp()
  //   $(".menu > li").hover(
  //     function () {
  //       // console.log("hover");
  //       // console.log($(this));
  //       $(this).find(".submenu").stop().slideDown();
  //     },
  //     function () {
  //       $(this).find(".submenu").stop().slideUp();
  //     }
  //   );
  //   2. fadeIn() / fadeOut()
  //   $(".menu > li").hover(
  //     function () {
  //       $(this).find(".submenu").stop().fadeIn(500);
  //     },
  //     function () {
  //       $(this).find(".submenu").stop().fadeOut(500);
  //     }
  //   );
  // 3. 전체 서브메뉴 영역이 한꺼번에 열림 (전체이기 때문에 this 작성X)
  //   $(".menu").hover(
  //     function () {
  //       $(".submenu").stop().slideDown(400);
  //     },
  //     function () {
  //       $(".submenu").stop().slideUp(400);
  //     }
  //   );
  //   4.헤더 Bg 전체 서브메뉴와 header-bg 영역이 한꺼번에 보이게 하기
  //   $("menu").hover(
  //     function () {
  //       $(".submenu, .header-bg").stop().slideDown(400);
  //     },
  //     function () {
  //       $("submenu").stop().slideUp(400);
  //     }
  //   );
  // 5. classList()
  //   $(".menu > li").hover(
  //     function () {
  //       $(this).find(".submenu").addClass("active");
  //     },
  //     function () {
  //       $(this).find(".submenu").removeClass("active");
  //     }
  //   );
});

// this = forEach 개념과 유사
