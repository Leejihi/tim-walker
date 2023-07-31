// ************ 전체영역이벤트 ************
// 스크롤시 배경색상 변화

// 변경1
$(window).on("scroll", () => {
  const slideBox = $(".m-banner").offset().top + 100;

  if (scrollY > slideBox) {
    $("body").addClass("active");
  } else {
    $("body").removeClass("active");
  }
});

// 변경2
$(window).on("scroll", () => {
  const slideBox = $(".change").offset().top;

  if (scrollY > slideBox) {
    $("body").addClass("none-active");
  } else {
    $("body").removeClass("none-active");
  }
});

// 버튼클릭시 부드러운 이동
$(".upto").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});

// 마우스 커서 이벤트

const cursor = document.querySelector(".w-embed");
const body = document.querySelector("body");
const cursorDot = document.querySelector(".cursor-dot");

// body 요소에 "mousemove" 이벤트를 등록합니다.
body.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

body.addEventListener("mousemove", (event) => {
  // .cursor-dot 요소를 마우스 커서의 위치로 이동시킵니다.
  cursorDot.style.left = event.clientX + "px";
  cursorDot.style.top = event.clientY + "px";
});

// a태그 위에 마우스 올라가면 사이즈 변경
$(document).ready(function () {
  $(".link").mouseover(function () {
    $(".w-embed").css("width", "4vw").css("height", "4vw");
  });

  $(".link").mouseout(function () {
    $(".w-embed").css("width", "1vw").css("height", "1vw");
  });
});

// 지정된 위치에 올라가면 마우스 커서 변경
$(document).ready(function () {
  $(".cursor-change").mouseover(function () {
    $(".w-embed").addClass("show");
    $(".cursor-dot").addClass("show");
  });

  $(".cursor-change").mouseout(function () {
    $(".w-embed").removeClass("show");
    $(".cursor-dot").removeClass("show");
  });
});

// //////////////전체영역 이벤트 끝///////////////// //

// //////////////개별영역 이벤트 시작///////////////// //

// ************ 상단 글자이벤트 ************
// h1 글자 하단에서 등장

let typeSplit;

function runSplit() {
  typeSplit = new SplitType(".split-lines", {
    types: "lines",
    tagName: "span",
  });
  $(".split-lines .line").wrap("<span class='line-mask'></span>");
  $(".split-lines").css("opacity", "1");
}

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

runSplit();

let tl = gsap.timeline({ defaults: { ease: "power3.easeOut", duration: 0.7 } });

tl.from(" .split-lines .line", {
  yPercent: 100,
  rotation: 7,
  stagger: 0.1,
});

// ************ video영역 ************
// 스크롤시 메인배너 확대, 축소 이벤트

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  $("#mov01").css({
    width: 100 + scroll / 12 + "%",
  });
});

// ************ key-wrapper1 이벤트 ************
//  영역 글자 호버시 사진 이미지 커지기

$(document).ready(function () {
  $(".txt1").hover(
    function () {
      $(".mini-img1").css("transform", "scale(1.2)");
    },
    function () {
      $(".mini-img1").css("transform", "scale(1)");
    }
  );

  $(".txt2").hover(
    function () {
      $(".mini-img2").css("transform", "scale(1.2)");
    },
    function () {
      $(".mini-img2").css("transform", "scale(1)");
    }
  );

  $(".txt3").hover(
    function () {
      $(".mini-img3").css("transform", "scale(1.2)");
    },
    function () {
      $(".mini-img3").css("transform", "scale(1)");
    }
  );
});

// ************ m-slider 작품 슬라이드 ************

// ************ m-content 이벤트 ************

// book 글자 이벤트

// 책 영역 이미지 속성 변경
$(document).ready(function () {
  function animateImageChange() {
    const imgChange1 = document.getElementById("img-change1");
    const imgChange2 = document.getElementById("img-change2");
    const bookimg1 = $(".bookimg1");
    const bookimg2 = $(".bookimg2");
    const bookimg3 = $(".bookimg3");
    const bookimg4 = $(".bookimg4");
    const bookimg5 = $(".bookimg5");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= $(imgChange1).offset().top) {
        bookimg1.attr("src", "./images/books-4.png"),
          bookimg2.attr("src", "./images/books-2.png"),
          bookimg3.attr("src", "./images/books-5.png"),
          bookimg4.attr("src", "./images/books-8.png"),
          bookimg5.attr("src", "./images/books-1.png");
      } else {
        bookimg1.attr("src", "./images/books-8.png"),
          bookimg2.attr("src", "./images/books-3.png"),
          bookimg3.attr("src", "./images/books-6.png"),
          bookimg4.attr("src", "./images/books-7.png"),
          bookimg5.attr("src", "./images/books-2.png");
      }
    });

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= $(imgChange2).offset().top) {
        bookimg1.attr("src", "./images/books-7.png"),
          bookimg2.attr("src", "./images/books-6.png"),
          bookimg3.attr("src", "./images/books-2.png"),
          bookimg4.attr("src", "./images/books-3.png"),
          bookimg5.attr("src", "./images/books-8.png");
      } else {
        bookimg1.attr("src", "./images/books-8.png"),
          bookimg2.attr("src", "./images/books-3.png"),
          bookimg3.attr("src", "./images/books-6.png"),
          bookimg4.attr("src", "./images/books-7.png"),
          bookimg5.attr("src", "./images/books-2.png");
      }
    });
  }

  // Call the function to set up the animation
  animateImageChange();
});

// 글자이벤트

// 풋터영역 글자 이벤트
// DOMContentLoaded 이벤트로 스크립트 실행
document.addEventListener("DOMContentLoaded", function () {
  let typeSplit;

  function runSplit() {
    typeSplit = new SplitType(".split-lines", {
      types: "lines",
      tagName: "span",
    });
    $(".split-lines .line").wrap("<span class='line-mask'></span>");
    $(".split-lines").css("opacity", "1");
  }
  // Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      typeSplit.revert();
      runSplit();
    }
  });

  runSplit();

  let tl = gsap.timeline({
    defaults: { ease: "power3.easeOut", duration: 0.7 },
  });

  tl.from(
    " .split-lines .line",
    0.5,
    {
      yPercent: 100,
      rotation: 7,
      stagger: 0.1,
    },
    0.5
  );

  // '.split-area'에 도착했을 때
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".split-area", // 애니메이션을 실행할 요소 선택
    start: "top 90%", // 요소가 뷰포트의 90% 지점에 도달하면 애니메이션 실행
    onEnter: () => {
      tl.restart(); // 애니메이션 재생
    },
    once: true, // 애니메이션은 한 번만 실행
  });

  // book '.split-area2'에 도착했을 때
  ScrollTrigger.create({
    trigger: ".split-area2",
    start: "top 90%",
    onEnter: () => {
      tl.restart();
    },
    once: true,
  });

  // '.split-area3'에 도착했을 때
  ScrollTrigger.create({
    trigger: ".split-area3",
    start: "top 90%",
    onEnter: () => {
      tl.restart();
    },
    once: true,
  });
});

// 'key-wrapper1 영역 글자 이벤트
// DOMContentLoaded 이벤트로 스크립트 실행
document.addEventListener("DOMContentLoaded", function () {
  let typeSplit;

  function runSplit() {
    typeSplit = new SplitType(".split-lines-k", {
      types: "lines",
      tagName: "span",
    });
    $(".split-lines-k .line").wrap("<span class='line-mask'></span>");
    $(".split-lines-k").css("opacity", "1");
  }
  // Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      typeSplit.revert();
      runSplit();
    }
  });

  runSplit();

  let tl = gsap.timeline({
    defaults: { ease: "power3.easeOut", duration: 0.7 },
  });

  tl.from(
    " .split-lines-k .line",
    0.5,
    {
      yPercent: 100,
      rotation: 7,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.easeOut",
    },
    0.5
  );

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".key-wrapper1",
    start: "top 70%",
    onEnter: () => {
      tl.restart();
    },
    once: true,
  });
});

// '.footer'에 도착했을 때
// DOMContentLoaded 이벤트로 스크립트 실행
document.addEventListener("DOMContentLoaded", function () {
  let typeSplit;

  function runSplit() {
    typeSplit = new SplitType(".split-lines-f", {
      types: "lines",
      tagName: "span",
    });
    $(".split-lines-f .line").wrap("<span class='line-mask'></span>");
    $(".split-lines-f").css("opacity", "1");
  }
  // Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      typeSplit.revert();
      runSplit();
    }
  });

  runSplit();

  let tl = gsap.timeline({
    defaults: { ease: "power3.easeOut", duration: 0.7 },
  });

  tl.from(
    " .split-lines-f .line",
    0.5,
    {
      yPercent: 100,
      rotation: 7,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.easeOut",
    },
    0.5
  );

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".footer",
    start: "top 70%",
    onEnter: () => {
      tl.restart();
    },
    once: true,
  });
});
