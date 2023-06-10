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

  //tags
  $("div.tag .tag-open").click(function () {
    if ($(this).parent().hasClass("open")) {
      $(this).parent().removeClass("open");
      $("div.tag ul").slideUp();
    } else {
      $("div.tag ul").slideUp();
      $(this).parent().children("ul").slideDown();
      $("div.tag ul").removeClass("open");
      $(this).parent().addClass("open");
    }
  });

  // timer
  

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
    $('.select-header').toggleClass("active")
    $('.header-bottom__list').toggle("active")
    }
  );

  // header-mob btn
  $("#btn-header-mob").click(function () {
    $('.select-header').toggleClass("active")
    $('.header-bottom__list').toggle("active")
    }
  );

  // header-menu cross
  $(".burger").click(function () {
    $('.header-menu-burger').toggleClass("active")
    $("html").toggleClass("overflow");
    $(".burger__img").toggleClass("active");
    $(".burger-cross").toggleClass("active");
    }
  );

});
