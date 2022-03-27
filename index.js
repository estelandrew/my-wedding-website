import "./src/styles/normalize.scss";
import "./src/styles/main.scss";
import "./src/styles/header.scss";
import "./src/styles/hero.scss";
import "./src/styles/home-section.scss";
import "./src/styles/schedule.scss";
import "./src/styles/accomodations.scss";

const nav = document.querySelector(".nav-wrapper");
const body = document.querySelector("body");

function openMenu() {
    nav.classList.add("menu-open");
    body.classList.add("menu-open");
}

function closeMenu() {
    nav.classList.remove("menu-open");
    body.classList.remove("menu-open");
}

const menuButton = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".mobile-menu-close-button");
menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);