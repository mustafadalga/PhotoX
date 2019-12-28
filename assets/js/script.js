$(document).ready(function () {

  $(".nav-button").click(function () {
    $(this).toggleClass("change");
  });


  $(window).scroll(function () {

    let position = $(this).scrollTop();
    var a = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });



  $(window).scroll(function () {

    var position = $(this).scrollTop();
    if (position >= 650) {
      $('.camera-img').addClass("from-left");
      $(".mission-text").addClass("from-right");
    } else {
      $('.camera-img').removeClass("from-left");
      $(".mission-text").removeClass("from-right");
    }
  });



  $(".gallery-list-item").click(function () {

    $(this).addClass("active-item").siblings().removeClass("active-item");

    let value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show(300);
    } else {
      $(".filter").not("." + value).hide();
      $(".filter").filter("." + value).show(300);
    }
  });



});
