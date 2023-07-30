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

// 스크롤시 메인배너 확대, 축소 이벤트

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  $("#mov01").css({
    width: 100 + scroll / 12 + "%",
  });
});

// ************ 글자이벤트 끝 ************
// key-wrapper1 영역 글자 호버시 사진 이미지 커지기

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
