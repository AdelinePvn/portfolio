$(document).ready(function () {
    changeColor($(".carousel-cell").eq(flkty.selectedIndex).attr("id"));
  
    flkty.on("change", function (index) {
      let event = $(".carousel-cell").eq(index).attr("id");
  
      changeColor(event);
    });
  });
  
  const changeColor = (event) => {
    let knowledge = $(".knowledge");
    if (event == "carousel-knowledge") {
      knowledge.each(function (index) {
        const gradient = getGradientByIndex(index);
        setTimeout(() => {
          let percent = parseInt($(".percentage", this).text().replace("%", ""));
          const shape = $(".shape", this);
  
          const leftPercent = 100 - percent;
          shape.css("left", "-" + leftPercent + "%");
          shape.css("background", "radial-gradient(circle, " + gradient + ")");
        }, (index + 1) * 100);
      });
    } else {
      knowledge.each(function () {
        $(".shape", this).css("left", "-100%");
      });
    }
  };
  