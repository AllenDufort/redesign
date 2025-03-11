function myFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav") {
        x.className += " menu-clicked";
    } else {
        x.className = "nav";
    }
}