(function () {
  var slides = document.querySelectorAll(".banner-slide");
  var dots = document.querySelectorAll(".banner-dots button");
  var current = 0;
  var timer;

  function showSlide(index) {
    if (!slides.length) return;
    current = index;
    slides.forEach(function (s, i) {
      s.classList.toggle("active", i === current);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === current);
    });
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  if (slides.length) {
    dots.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        clearInterval(timer);
        showSlide(i);
        timer = setInterval(nextSlide, 6000);
      });
    });
    timer = setInterval(nextSlide, 6000);
  }

  var navToggle = document.querySelector(".mobile-nav-toggle");
  var navList = document.querySelector(".main-nav ul");
  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      navList.classList.toggle("open");
    });
  }
})();
