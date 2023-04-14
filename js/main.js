/* global alert */
export function testme() {
  alert("hi!");
}

$(document).ready(function () {
  "use strict";

  //charts
  $(".main-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".chart-1").easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 30,
    lineCap: "butt",
    barColor: "#072D4D",
    trackColor: "#D7D7D7",
    size: 300,
    animate: 500,
  });
  $(".chart-2").easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 30,
    lineCap: "butt",
    barColor: "#7F5539",
    trackColor: "#D7D7D7",
    size: 300,
    animate: 500,
  });
  $(".chart-3").easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 30,
    lineCap: "butt",
    barColor: "#DDA15E",
    trackColor: "#D7D7D7",
    size: 300,
    animate: 500,
  });
  $(".chart-4").easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 30,
    lineCap: "butt",
    barColor: "#034A90",
    trackColor: "#D7D7D7",
    size: 500,
    animate: 500,
  });

  //repeater
  $(".repeater").repeater({
    show: function () {
      $(this).slideDown();
    },
    hide: function (deleteElement) {
      $(this).slideUp(deleteElement);
    },
    // ready: function (setIndexes) {},
  });

  //mobile-sliedbar

  $(".menu-mobile,.overlay-slide-mobile").on("click touchstart", function (e) {
    $(".slidebar-mobile,.overlay-slide-mobile").toggleClass("is-visible");
    $("#wrapper-mobile").toggleClass("is-obscured");
    e.preventDefault();
  });


  //ntf-sliedbar

  $(".menu,.overlay-slide").on("click touchstart", function (e) {
    $(".ntf-menu,.overlay-slide").toggleClass("is-visible");
    e.preventDefault();
  });
  $(".close-icon").click(function () {
    $(".ntf-menu,.overlay-slide").removeClass("is-visible");
  });

  //password

  $(document).on("mousedown", ".show-password", function () {
    $(".password-group input").attr("type", "text");
    $(".show-password").html('<i class="fas fa-eye-slash"></i>');
  });
  $(document).on("mouseup", ".show-password", function () {
    $(".password-group input").attr("type", "password");
    $(".show-password").html('<i class="fas fa-eye"></i>');
  });

  //data
  $(".calendar").datetimepicker({
    format: "L",
  });
  $("#datetimepicker3").datetimepicker({
    format: "LT",
  });
  //time
  $("#datetimepicker13").datetimepicker({
    inline: true,
    format: "L",
  });
});
