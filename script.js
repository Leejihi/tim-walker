// ************ 전체영역이벤트 ************
// 스크롤시 배경색상 변화

// 변경1
$(window).on('scroll', () => {
  const slideBox = $('.m-banner').offset().top + 100;

  if (scrollY > slideBox) {
    $('body').addClass('active');
  } else {
    $('body').removeClass('active');
  }
});

// 변경2
$(window).on('scroll', () => {
  const slideBox = $('.change').offset().top;

  if (scrollY > slideBox) {
    $('body').addClass('none-active');
  } else {
    $('body').removeClass('none-active');
  }
});

// 버튼클릭시 부드러운 이동
$('.upto').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
  return false;
});

// 마우스 커서 이벤트

const cursor = document.querySelector('.w-embed');
const body = document.querySelector('body');
const cursorDot = document.querySelector('.cursor-dot');

// body 요소에 "mousemove" 이벤트를 등록합니다.
body.addEventListener('mousemove', (event) => {
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + 'px';
});

body.addEventListener('mousemove', (event) => {
  // .cursor-dot 요소를 마우스 커서의 위치로 이동시킵니다.
  cursorDot.style.left = event.clientX + 'px';
  cursorDot.style.top = event.clientY + 'px';
});

// a태그 위에 마우스 올라가면 사이즈 변경
$(document).ready(function () {
  $('.link').mouseover(function () {
    $('.w-embed').css('width', '4vw').css('height', '4vw');
  });

  $('.link').mouseout(function () {
    $('.w-embed').css('width', '1vw').css('height', '1vw');
  });
});

// 지정된 위치에 올라가면 마우스 커서 변경
$(document).ready(function () {
  $('.cursor-change').mouseover(function () {
    $('.w-embed').addClass('show');
    $('.cursor-dot').addClass('show');
  });

  $('.cursor-change').mouseout(function () {
    $('.w-embed').removeClass('show');
    $('.cursor-dot').removeClass('show');
  });
});

// //////////////전체영역 이벤트 끝///////////////// //

// //////////////개별영역 이벤트 시작///////////////// //

// ************ 상단 글자이벤트 ************
// h1 글자 하단에서 등장

let typeSplit;

function runSplit() {
  typeSplit = new SplitType('.split-lines', {
    types: 'lines',
    tagName: 'span',
  });
  $('.split-lines .line').wrap("<span class='line-mask'></span>");
  $('.split-lines').css('opacity', '1');
}

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener('resize', function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

runSplit();

let tl = gsap.timeline({ defaults: { ease: 'power3.easeOut', duration: 0.7 } });

tl.from(' .split-lines .line', {
  yPercent: 100,
  rotation: 7,
  stagger: 0.1,
});

// ************ video영역 ************
// 스크롤시 메인배너 확대, 축소 이벤트

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  $('#mov01').css({
    width: 100 + scroll / 12 + '%',
  });
});

// ************ key-wrapper1 이벤트 ************
//  영역 글자 호버시 사진 이미지 커지기

$(document).ready(function () {
  $('.txt1').hover(
    function () {
      $('.mini-img1').css('transform', 'scale(1.2)');
    },
    function () {
      $('.mini-img1').css('transform', 'scale(1)');
    }
  );

  $('.txt2').hover(
    function () {
      $('.mini-img2').css('transform', 'scale(1.2)');
    },
    function () {
      $('.mini-img2').css('transform', 'scale(1)');
    }
  );

  $('.txt3').hover(
    function () {
      $('.mini-img3').css('transform', 'scale(1.2)');
    },
    function () {
      $('.mini-img3').css('transform', 'scale(1)');
    }
  );
});

// ************ m-slider 작품 슬라이드 ************

// 스크롤 이벤트를 감지하여 슬라이더 클래스 이름을 계산하는 함수
$(document).ready(function () {
  // 문서가 준비되면 슬라이더 영역을 확인하여 텍스트를 변경합니다.
  checkSliderInView();

  // 슬라이더 영역을 확인하여 텍스트를 변경하는 함수
  function checkSliderInView() {
    let sliders = $('.m-slider .inner-box .slider');

    sliders.each(function () {
      let sliderElement = $(this);
      let sliderTop = sliderElement.offset().top;
      let sliderBottom = sliderTop + sliderElement.outerHeight();
      let viewportTop = $(window).scrollTop();
      let viewportBottom = viewportTop + $(window).height();
      let sliderTxtElement = $('.m-slider .slider-txt h2');

      // 슬라이더 영역을 확인하여 텍스트를 변경합니다.
      if (sliderBottom > viewportTop && sliderTop < viewportBottom) {
        if (sliderElement.hasClass('slider1')) {
          sliderTxtElement.text('Selected Work');
        } else if (sliderElement.hasClass('slider2')) {
          sliderTxtElement.text('Portraiture');
        } else if (sliderElement.hasClass('slider3')) {
          sliderTxtElement.text('Stories');
        } else if (sliderElement.hasClass('slider4')) {
          sliderTxtElement.text('Article');
        }
      }
    });
  }

  // 페이지 스크롤 시 checkSliderInView 함수를 호출합니다.
  $(window).scroll(function () {
    checkSliderInView();
  });
});

// 슬라이더 작성

gsap.registerPlugin(ScrollTrigger);

let slider1Height = window.innerHeight;
let slider2Height = slider1Height;
let slider3Height = slider2Height;

gsap.to('.slider2', {
  scrollTrigger: {
    trigger: '.slider2',
    start: 'bottom bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: function (self) {
      let progress = self.progress;
      let scaleValue = progress * (slider2Height / slider1Height);

      document.querySelector('.slider2').style.height = slider1Height + 'px';
      document.querySelector('.slider2').style.transform =
        'scale3d(1, ' + scaleValue + ', 1)';

      // 슬라이더 2의 높이가 window.innerHeight와 같을 때만 slider3의 이벤트를 추가
      if (slider2Height === window.innerHeight) {
        let slider3Height = 0;

        gsap.fromTo(
          '.slider3',
          {
            height: '0px', // 시작 높이값을 0으로 설정
            transform: 'scale3d(1, 0, 1)', // 시작 스케일값을 0으로 설정
          },
          {
            scrollTrigger: {
              trigger: '.slider3',
              start: 'bottom bottom',
              end: 'bottom top',
              scrub: true,
              onUpdate: function (self) {
                let progress = self.progress;
                let slider2ScrollDistance = slider2Height - window.innerHeight;
                slider3Height = progress * slider2ScrollDistance; // 스크롤에 따라 높이값 계산
                slider3Height = Math.min(slider3Height, window.innerHeight); // 최대 100vh로 제한

                document.querySelector('.slider3').style.height =
                  slider2Height + 'px';
                document.querySelector('.slider3').style.transform =
                  'scale3d(1, ' + progress + ', 1)';
              },
            },
          }
        );
      }

      // 슬라이더 3의 높이가 window.innerHeight와 같을 때만 slider4의 이벤트를 추가
      if (slider3Height === window.innerHeight) {
        let slider4Height = 0;

        gsap.fromTo(
          '.slider4',
          {
            height: '0px', // 시작 높이값을 0으로 설정
            transform: 'scale3d(1, 0, 1)', // 시작 스케일값을 0으로 설정
          },
          {
            scrollTrigger: {
              trigger: '.slider4',
              start: 'bottom bottom',
              end: 'bottom top',
              scrub: true,
              onUpdate: function (self) {
                let progress = self.progress;
                let slider3ScrollDistance = slider3Height - window.innerHeight;
                slider4Height = progress * slider3ScrollDistance; // 스크롤에 따라 높이값 계산
                slider4Height = Math.min(slider4Height, window.innerHeight); // 최대 100vh로 제한

                document.querySelector('.slider4').style.height =
                  slider3Height + 'px';
                document.querySelector('.slider4').style.transform =
                  'scale3d(1, ' + progress + ', 1)';
              },
            },
          }
        );
      }
    },
  },
});

// ************ m-content 이벤트 ************

// book 글자 이벤트

// 책 영역 이미지 속성 변경
$(document).ready(function () {
  function animateImageChange() {
    const imgChange1 = document.getElementById('img-change1');
    const imgChange2 = document.getElementById('img-change2');
    const bookimg1 = $('.bookimg1');
    const bookimg2 = $('.bookimg2');
    const bookimg3 = $('.bookimg3');
    const bookimg4 = $('.bookimg4');
    const bookimg5 = $('.bookimg5');

    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= $(imgChange1).offset().top) {
        bookimg1.attr('src', './images/books-4.png'),
          bookimg2.attr('src', './images/books-2.png'),
          bookimg3.attr('src', './images/books-5.png'),
          bookimg4.attr('src', './images/books-8.png'),
          bookimg5.attr('src', './images/books-1.png');
      } else {
        bookimg1.attr('src', './images/books-8.png'),
          bookimg2.attr('src', './images/books-3.png'),
          bookimg3.attr('src', './images/books-6.png'),
          bookimg4.attr('src', './images/books-7.png'),
          bookimg5.attr('src', './images/books-2.png');
      }
    });

    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= $(imgChange2).offset().top) {
        bookimg1.attr('src', './images/books-7.png'),
          bookimg2.attr('src', './images/books-6.png'),
          bookimg3.attr('src', './images/books-2.png'),
          bookimg4.attr('src', './images/books-3.png'),
          bookimg5.attr('src', './images/books-8.png');
      } else {
        bookimg1.attr('src', './images/books-8.png'),
          bookimg2.attr('src', './images/books-3.png'),
          bookimg3.attr('src', './images/books-6.png'),
          bookimg4.attr('src', './images/books-7.png'),
          bookimg5.attr('src', './images/books-2.png');
      }
    });
  }

  // Call the function to set up the animation
  animateImageChange();
});

// 글자이벤트

// 풋터영역 글자 이벤트
// DOMContentLoaded 이벤트로 스크립트 실행
document.addEventListener('DOMContentLoaded', function () {
  let typeSplit;

  function runSplit() {
    typeSplit = new SplitType('.split-lines', {
      types: 'lines',
      tagName: 'span',
    });
    $('.split-lines .line').wrap("<span class='line-mask'></span>");
    $('.split-lines').css('opacity', '1');
  }
  // Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener('resize', function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      typeSplit.revert();
      runSplit();
    }
  });

  runSplit();

  let tl = gsap.timeline({
    defaults: { ease: 'power3.easeOut', duration: 0.7 },
  });

  tl.from(
    ' .split-lines .line',
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

  // book '.split-area2'에 도착했을 때
  ScrollTrigger.create({
    trigger: '.split-area2',
    start: 'top 90%',
    onEnter: () => {
      tl.restart();
    },
    once: true,
  });

  // '.split-area3'에 도착했을 때
  ScrollTrigger.create({
    trigger: '.split-area3',
    start: 'top 90%',
    onEnter: () => {
      tl.restart();
    },
    once: true,
  });
});

// 'key-wrapper1 영역 글자 이벤트
// DOMContentLoaded 이벤트로 스크립트 실행
document.addEventListener('DOMContentLoaded', function () {
  let typeSplit;

  function runSplit() {
    typeSplit = new SplitType('.split-lines-k', {
      types: 'lines',
      tagName: 'span',
    });
    $('.split-lines-k .line').wrap("<span class='line-mask'></span>");
    $('.split-lines-k').css('opacity', '1');
  }
  // Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener('resize', function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      typeSplit.revert();
      runSplit();
    }
  });

  runSplit();

  let tl = gsap.timeline({
    defaults: { ease: 'power3.easeOut', duration: 0.7 },
  });

  tl.from(
    ' .split-lines-k .line',
    0.5,
    {
      yPercent: 100,
      rotation: 7,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.easeOut',
    },
    0.5
  );

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: '.key-wrapper1',
    start: 'top 70%',
    onEnter: () => {
      tl.restart();
    },
    once: true,
  });
});

// '.footer'에 도착했을 때
// DOMContentLoaded 이벤트로 스크립트 실행
document.addEventListener('DOMContentLoaded', function () {
  let typeSplit;

  function runSplit() {
    typeSplit = new SplitType('.split-lines-f', {
      types: 'lines',
      tagName: 'span',
    });
    $('.split-lines-f .line').wrap("<span class='line-mask'></span>");
    $('.split-lines-f').css('opacity', '1');
  }
  // Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener('resize', function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      typeSplit.revert();
      runSplit();
    }
  });

  runSplit();

  let tl = gsap.timeline({
    defaults: { ease: 'power3.easeOut', duration: 0.7 },
  });

  tl.from(
    ' .split-lines-f .line',
    0.5,
    {
      yPercent: 100,
      rotation: 7,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.easeOut',
    },
    0.5
  );

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: '.footer',
    start: 'top 70%',
    onEnter: () => {
      tl.restart();
    },
    once: true,
  });
});
