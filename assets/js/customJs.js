function changeMySrc(input) {
    var iconImage = document.getElementsByName("backImageIcon").item(0);

    if (input == 0) {
        iconImage.setAttribute("src", "assets/img/backIcon.png");
    } else if (input == 1) {
        iconImage.setAttribute("src", "assets/img/backIconHover.png");
    }
}