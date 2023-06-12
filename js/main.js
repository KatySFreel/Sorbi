$(document).ready(function () {
  const offerSwiper = new Swiper(".offer__slider", {
    slidesPerView: 1,
    rtl: true,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".offer-next",
      prevEl: ".offer-prev",
    },
  });

  const productSwiper = new Swiper(".product-swiper", {
    rtl: true,
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
      },
      480: {
        slidesPerView: 2,
        scrollbar: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        rtl: true,
      },
      580: {
        slidesPerView: 2,
      },
      840: {
        slidesPerView: 3,
      },
      1090: {
        slidesPerView: 4,
      },
    },
  });

  const newsSwiper = new Swiper(".news-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".news-slide-next",
      prevEl: ".news-slide-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
          rtl: true,
        },
      },
      480: {
        slidesPerView: 1,
        scrollbar: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          rtl: true,
        },
      },
      580: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          rtl: true,
        },
      },
      840: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          rtl: true,
        },
      },
      1200: {
        slidesPerView: 1,
      },
    },
  });

  const videoSwiper = new Swiper(".video-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".video-slide-next",
      prevEl: ".video-slide-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
      },
      480: {
        slidesPerView: 1,
        scrollbar: false,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
      580: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
      840: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
      1200: {
        slidesPerView: 1,
      },
    },
  });

  const reviewsSwiper = new Swiper(".reviews-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".reviews-slide-prev",
      prevEl: ".reviews-slide-next",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
      },
      480: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
      },
      580: {
        slidesPerView: 1,
      },
    },
  });

  const sicretsSwiper = new Swiper(".sicrets-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".sicrets-slide-prev",
      prevEl: ".sicrets-slide-next",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
      },
      480: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          enabled: true,
          clickable: true,
        },
      },
      580: {
        slidesPerView: 1,
      },
    },
  });

  //pauseSlide
  $("#toggle").click(function () {
    if ($(this).hasClass("pause")) {
      offerSwiper.autoplay.stop();
      $(this).removeClass("pause");
      $(this).addClass("play");
    } else {
      offerSwiper.autoplay.start();
      $(this).removeClass("play");
      $(this).addClass("pause");
    }
  });

  // Accordion benefits
  $("li.benefits__item img").click(function () {
    if ($(this).parent().hasClass("open")) {
      $("li.benefits__item").removeClass("open");
      $("li.benefits__item div").slideUp();
    } else {
      $("li.benefits__item div").slideUp();
      $(this).parent().children("div").slideDown();
      $("li.benefits__item").removeClass("open");
      $(this).parent().addClass("open");
    }
  });

  // menu accordion
  $("div.menu-acc__accordion p").click(function () {
    if ($(this).parent().hasClass("open")) {
      $("div.menu-acc__accordion").removeClass("open");
      $("div.menu-acc__accordion ul").slideUp();
    } else {
      $("div.menu-acc__accordion ul").slideUp();
      $(this).parent().children("ul").slideDown();
      $("div.menu-acc__accordion").removeClass("open");
      $(this).parent().addClass("open");
    }
  });

  // scroll sicrets
  $(".nano").nanoScroller({ alwaysVisible: true });

  //tags
  $("div.tag .tag-open").click(function () {
    if ($(this).parent().hasClass("open")) {
      $(this).parent().removeClass("open");
      $("div.tag ul").slideUp();
    } else {
      $("div.tag ul").slideUp();
      $(this).parent().children("ul").slideDown();
      $("div.tag").removeClass("open");
      $(this).parent().addClass("open");
    }
  });

  //volume
  $("div.volume .volume-open").click(function () {
    if ($(this).parent().hasClass("open")) {
      $(this).parent().removeClass("open");
      $("div.volume ul").slideUp();
    } else {
      $("div.volume ul").slideUp();
      $(this).parent().children("ul").slideDown();
      $("div.volume").removeClass("open");
      $(this).parent().addClass("open");
    }
  });

  // timer
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  var secondsEl = document.getElementById("seconds");
  var minutesEl = document.getElementById("minutes");
  var hoursEl = document.getElementById("hours");
  var daysEl = document.getElementById("days");

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setAnimation(secondsEl, seconds, 60);
    setAnimation(minutesEl, minutes, 60);
    setAnimation(hoursEl, hours, 24);
    setAnimation(daysEl, days, 365);
  }, 1000);

  function setAnimation(elem, time, divider) {
    // Получаем стили для элемента
    let styles = getComputedStyle(document.documentElement);
    // Получаем значение переменной
    let circleWidth = parseInt(
      styles.getPropertyValue("--circle-width").trim()
    );
    let circleWeight = parseInt(
      styles.getPropertyValue("--circle-weight").trim()
    );
    let circleElem = elem.querySelector(".circle_animation");
    var progress = time;
    var radius = parseInt(circleWidth / 2 - circleWeight / 2);
    var initialOffset = circleLength(radius);
    circleElem.setAttribute("r", radius);
    circleElem.setAttribute("cx", circleWidth / 2);
    circleElem.setAttribute("cy", circleWidth / 2);
    circleElem.setAttribute("stroke-width", circleWeight);
    circleElem.style.strokeWidth = circleWeight;
    circleElem.style.r = radius;
    circleElem.style.cx = circleWidth / 2;
    circleElem.style.cy = circleWidth / 2;

    circleElem.style.strokeDasharray = initialOffset;
    circleElem.setAttribute("stroke-dasharray", initialOffset);

    if (time == 0) {
      circleElem.setAttribute("stroke-dashoffset", 0);
      circleElem.style.strokeDashoffset = 0;
    }

    if (time > 0) {
      elem.querySelector(".timer-number").textContent = time < 10 ? `0${time}` : time;
      circleElem.setAttribute(
        "stroke-dashoffset",
        parseInt(progress * (initialOffset / divider) + 1)
      );
      circleElem.style.strokeDashoffset = parseInt(
        progress * (initialOffset / divider) + 1
      );
    }
  }

  function circleLength(r) {
    return Math.floor(2 * Math.PI * r);
  }

  // scroll btn
  let prevScrollpos = window.pageYOffset;
  let scrollBtn = document.querySelector("#menu-btns-fix");
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
    prevScrollpos = currentScrollPos;
  };

  $("#scroll-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 500,
        easing: "linear",
      }
    );
    return false;
  });

  // header btn
  $("#btn-header").click(function () {
    $(".select-header").toggleClass("active");
    $(".header-bottom__list").toggle("active");
  });

  // header-mob btn
  $("#btn-header-mob").click(function () {
    $(".select-header").toggleClass("active");
    $(".header-bottom__list").toggle("active");
  });

  // header-menu cross
  $(".burger").click(function () {
    $(".header-menu-burger").toggleClass("active");
    $("html").toggleClass("overflow");
    $(".burger__img").toggleClass("active");
    $(".burger-cross").toggleClass("active");
  });
});
