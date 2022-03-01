"use strict";
window.addEventListener("keydown", function (e) {
  // selecting the key and audio
  const key = this.document.querySelector(
    `.${e.key === e.key.toUpperCase() ? e.key.toLowerCase() : e.key}`
  );

  const audio = this.document.querySelector(
    `#${e.key === e.key.toUpperCase() ? e.key.toLowerCase() : e.key}`
  );
  //   If no audio is found this is executed
  if (!audio) {
    console.log(`No audio found`);
    return;
  }
  audio.play();
  audio.currentTime = 0;
  //   adding the playing class
  key.classList.add("playing");

  // removing the playing class
  key.addEventListener("transitionend", function () {
    key.classList.remove("playing");
  });
});
