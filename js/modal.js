$(document).ready(function () {

  $(".more").click(function () {
    const html = $(this).next(".modal-data").html();

    let bgColor = $(this).prev(".lang").css("background");
    
    $(".modal .content").html(html);
    $(".modal .close").attr("style", "background: " + bgColor);
    $(".modal").addClass("active");
  });

  $(".modal").on("click", function () {
    $(".modal").removeClass("active");
  });
});
