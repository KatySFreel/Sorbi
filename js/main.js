$(document).ready(function () {
  const offerSwiper = new Swiper('.offer__slider', {
    slidesPerView: 1,
    rtl: true,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el:  ".slider__pagination",
      type: "bullets",
      clickable: true,
   },
   navigation: {
      nextEl:  ".offer-next",
      prevEl:  ".offer-prev",
    },
  });

  const productSwiper = new Swiper(".product-swiper", {
    rtl: true,
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 2000,
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
    autoHeight: true,
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

  const newsVideoSwiper = new Swiper(".video-swiper", {
    rtl: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    direction: "horizontal",
    autoHeight: true,
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

  // Accordion
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

  // scroll sicrets
  $(".nano").nanoScroller({ alwaysVisible: true });

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

  // timer
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          "light-gray": "#303640",
          seconds: "#939292",
          minutes: "#939292",
          hours: "#939292",
          days: "#939292",
        },
        fontFamily: {
          body: ["Ubuntu", "sans-serif"],
        },
      },
    },
  };

  ("use strict");

  // Selectors
  const daySpan = document.querySelector("#day");
  const hourSpan = document.querySelector("#hour");
  const minSpan = document.querySelector("#minutes");
  const secSpan = document.querySelector("#seconds");
  const dayDot = document.querySelector("#dot-day");
  const hourDot = document.querySelector("#dot-hour");
  const minDot = document.querySelector("#dot-minute");
  const secDot = document.querySelector("#dot-second");
  const hourContainer = hourDot.parentElement;
  const minContainer = minDot.parentElement;
  const secContainer = secDot.parentElement;

  // main clock logic
  setInterval(() => {
    const now = new Date();
    const time = {
      day: now.getDay(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      sec: now.getSeconds(),
    };

    // update time in document
    daySpan.textContent = padWithZeroes(time.day, 2);
    hourSpan.textContent = padWithZeroes(time.hour, 2);
    minSpan.textContent = padWithZeroes(time.minute, 2);
    secSpan.textContent = padWithZeroes(time.sec, 2);

    // update bar fill
    // dayContainer.style.setProperty("--p", `${(time.day/100) * 100}`);
    hourContainer.style.setProperty("--p", `${(time.hour / 24) * 100}`);
    minContainer.style.setProperty("--p", `${(time.minute / 60) * 100}`);
    secContainer.style.setProperty("--p", `${(time.sec / 60) * 100}`);

    // update dot location
    dayDot.style.transform = `rotate(${
      (time.day * 360) / 50 + time.day * 360
    }deg)`;
    hourDot.style.transform = `rotate(${
      (time.hour * 360) / 24 + time.hour * 360
    }deg)`;
    minDot.style.transform = `rotate(${
      (time.minute * 360) / 60 + time.hour * 360
    }deg)`;
    secDot.style.transform = `rotate(${
      (time.sec * 360) / 60 + time.minute * 360
    }deg)`;
  }, 1000);

  function padWithZeroes(number, length) {
    const zeroes = Array(length - number.toString().length)
      .fill("0")
      .join("");
    return zeroes + number.toString(); // concatenating zeroes to given number
  }

  // scroll btn
  $("a").click(function () {
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
    $('.select-header').toggleClass("active")
    $('.header-bottom__list').toggle("active")
    }
  );

  $("#btn-header-mob").click(function () {
    $('.select-header').toggleClass("active")
    $('.header-bottom__list').toggle("active")
    }
  );

  $(".burger").click(function () {
    $('.header-menu-burger').toggleClass("active")
    $("html").toggleClass("overflow");
    $(".burger__img").toggleClass("active");
    $(".burger-cross").toggleClass("active");
    }
  );

});
