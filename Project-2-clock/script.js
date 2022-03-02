"use strict";
setInterval(() => {
  // getting the actual date
  let date = new Date();
  let htime = date.getHours();
  let mtime = date.getMinutes();
  let stime = date.getSeconds();
  // formula to rotate
  let hrotate = htime * 30 + mtime / 2;
  let mrotate = mtime * 6;
  let srotate = stime * 6;
  // DOM manupulation
  document.querySelector(
    ".seconds-hand"
  ).style.transform = `rotate(${srotate}deg)`;
  document.querySelector(
    ".minutes-hand"
  ).style.transform = `rotate(${mrotate}deg)`;
  document.querySelector(
    ".hours-hand"
  ).style.transform = `rotate(${hrotate}deg)`;
}, 1000);
