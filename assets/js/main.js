$(document).ready(function () {
  //   $(".header__mobile--menu").on("click", function () {
  //     $(this).find(".header__mobile__list").toggleClass("header_mobile_opened");
  //   });

  $(".header__actions__mobile__button").on("click", function () {
    $(".header__mobile__list").toggleClass("header_mobile_opened");
  });
  $(".hero__header__nav__menu").on("click", function () {
    $(".hero__header__nav__list").toggleClass("nav__list__item--opened");
  });

  //   $("#productSlider").carousel({
  //     interval: 3000, // Change slide every 3 seconds
  //   });
});
