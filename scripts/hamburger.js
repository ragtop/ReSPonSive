/**
 * Allows the hamburger to function on smaller displays
 *
 * Author:  Mr. March
 * Date:    December 18, 2016
 */

var hamburgerActive = false;

/* animates the hamburger when it's clicked */
function animateHamburger() {
    if (!hamburgerActive) {
        document.getElementsByClassName("hamburger")[0].className="hamburger_active";
        document.getElementsByClassName("dropdown_container")[0].style.transition = "all .25s ease-in";
        document.getElementsByClassName("dropdown_container")[0].style.opacity = "1";
        document.getElementsByClassName("dropdown_container")[0].style.height = "auto";
        document.getElementsByClassName("dropdown_container")[0].style.visibility = "visible";
    } else {
        document.getElementsByClassName("hamburger_active")[0].className="hamburger";
        document.getElementsByClassName("dropdown_container")[0].style.transition = "none";
        document.getElementsByClassName("dropdown_container")[0].style.opacity = "0";
        document.getElementsByClassName("dropdown_container")[0].style.height = "0";
        document.getElementsByClassName("dropdown_container")[0].style.visibility = "hidden";
    }
    hamburgerActive = !hamburgerActive;
}