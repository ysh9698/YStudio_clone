"use strict";

$(document).on("click", "a[href='#']", function (e) {
  e.preventDefault();
});

// gnb메뉴
$(function () {
  $("header .menuOpen").on("click", function () {
    $(".gnb").addClass("on");
  });
  $(".gnb .close, section").on("click", function () {
    $(".gnb").removeClass("on");
  });
});

// fixheader
let scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

// 윈도우 창 조절 시 이벤트
$(window).on("scroll resize", function () {
  scrollTop = $(document).scrollTop();
  fixHeader();
});

// 고정헤더 함수
function fixHeader() {
  if (scrollTop > 150) {
    $("header").addClass("on");
  } else {
    $("header").removeClass("on");
  }
}

// 스크롤 애니메이션
$(function () {
  $(".animate").scrolla({
    mobile: false,
    once: false,
  });
});

// 상단으로 부드럽게(탑 버튼)
$(function () {
  $(".goTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});

// .top-visual 이미지 슬라이드
$(function () {
  $(".visual .slide").slick({
    arrows: true, // 화살표
    dots: false, // 인디케이트 해제
    fade: true, // 페이드인 효과
    autoplay: true, // 자동재생
    autoplaySpeed: 4000, // 자동재생 속도
    pauseOnHover: false,
    PauseOnFocus: false,
  });
});
