document.addEventListener("DOMContentLoaded", function () {

    const enlace = document.querySelector("body");

    setInterval(function () {

        if (enlace.style.color === "red") {
            enlace.style.color = "black";
        } else {
            enlace.style.color = "red";
        }

    }, 1000);

});
