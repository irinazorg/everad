"use strict";

$(document).ready(function () {
  // mobile description
  const mobileBtn = $(".lead-mobile-only-btn");
  const mobileBlock = $(".advantages-list");

  mobileBtn.on("click", function (e) {
    mobileBlock.slideToggle("fast");
    $(this).toggleClass("active");
  });
});
