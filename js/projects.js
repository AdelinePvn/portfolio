$(document).ready(function () {
    const projects = $(".projects .project");

    projects.each(function (index) {
        const color = getColorByIndex(index);
        const gradient = getGradientByIndex(index);

        $(".lang", this).css("background-color", color);
        $(".more", this).css("background-color", color);
        $(".buttons .button", this).css("background-color", color);
        $(".buttons .button", this).css("background", "radial-gradient(circle, " + gradient + ")");

    });
  });
  