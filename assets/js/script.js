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
});