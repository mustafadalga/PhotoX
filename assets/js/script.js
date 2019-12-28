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
});
