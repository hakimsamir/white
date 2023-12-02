$(document).ready(function () {
  // typing home
  var typed = new Typed("#typing", {
    strings: ["White page student activity"],
    typeSpeed: 200,
    loop: true,
  });
  // loading page
  $(".loading").fadeOut(5000, function () {
    $("body").css("overflow", "auto");
  });
  //event page
  $(".skitter-large").skitter({
    fullscreen: false,
    auto_play: false,
  });
  // sections page
  $("#sections .toggle").click(function () {
    $(".inner").not($(this).next()).slideUp(300);
    $(this).next().slideToggle(300);
  });
});
