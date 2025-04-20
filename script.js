const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.add('active');
    });
}


// script.js

// wait until the DOM is fully parsed
document.addEventListener("DOMContentLoaded", function() {
    const mainImg = document.getElementById("MainImg");
    const thumbs = document.querySelectorAll(".small-img");
  
    // loop through every thumbnail and bind a click handler
    thumbs.forEach(function(thumb) {
      thumb.addEventListener("click", function() {
        // swap the main image src
        mainImg.src = this.src;
      });
    });
  });
  