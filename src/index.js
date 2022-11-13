const reveal = () => {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

let section = document.getElementById("Number-count");
let start = false;
let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;
let body = document.querySelector("body");

window.onscroll = function () {
  if (body.offsetHeight < 4000) {
    if (window.scrollY >= section.offsetTop) {
      if (!start) {
        valueDisplays.forEach((valueDisplay) => {
          startCount(valueDisplay);
        });
      }
      start = true;
    }
  } else {
    if(!start){
      valueDisplays.forEach((valueDisplay) => {
        if (valueDisplay.textContent == 0) {
          startCount(valueDisplay);
        }
      });
    }
    start = true;
  }
};

const startCount = (valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-limit"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
};
