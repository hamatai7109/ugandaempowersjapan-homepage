// menu
document.getElementById("hamburgerBtn").onclick = function () {
  document.getElementById("header").classList.toggle("isHeaderOpen");
};

// slick（aboutのスライダー）.about__slider
$(".about__slider").slick({
  infinite: true,
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});
