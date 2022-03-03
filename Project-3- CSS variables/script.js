"use strict";
const root = document.documentElement;

const spaceSlider = document.getElementById("sSlider");

spaceSlider.addEventListener("input", (e) => {
  root.style.setProperty("--spacing", e.target.value + "px");
});

const blurSlider = document.getElementById("bslider");

blurSlider.addEventListener("input", (e) => {
  root.style.setProperty("--blur", e.target.value + "px");
});

const colorSlider = document.getElementById("cpicker");

colorSlider.addEventListener("input", (e) => {
  root.style.setProperty("--color", e.target.value);
});
