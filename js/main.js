$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $("nav").toggleClass("nav-toggle");
  });
  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $("nav").removeClass("nav-toggle");
  });
  $(".count").each(function () {
    let $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 5000,
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum + "+");
        },
      }
    );
  });

  $(".projects").magnicficPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
