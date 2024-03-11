$(document).ready(function () {

    let experience = $(".experience");

    experience.each(function (index) {
        $(".title h2", this).css("color", getColorByIndex(index));
    });
})