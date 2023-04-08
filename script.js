"use strict";

// Selectors
const card = document.querySelector(".card");
const qrCode = document.querySelector(".card .qr-code");
const overlay = document.querySelector(".overlay");
const position = document.querySelector(".position");





// On load
setTimeout(() => {
  qrCode.classList.add("show");
}, 500);






// Variables
let steps = 0;
let bodyActiveValue = 2;




// Events
qrCode.addEventListener("click", () => {
  overlay.classList.add("active");
  overlay.innerHTML = "";

  const srcImg = qrCode.querySelector("img").src;
  const imgHolder = document.createElement("div");
  imgHolder.classList.add("img");
  const imgEle = document.createElement("img");
  imgEle.src = srcImg;
  imgHolder.appendChild(imgEle);
  overlay.appendChild(imgHolder);
});



document.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    overlay.style.opacity = "0";

    setTimeout(() => {
      overlay.classList.remove("active");
      overlay.style.opacity = "";
    }, 300);
  }
});


position.addEventListener("click", () => {
  const cardWidth = card.getBoundingClientRect().width / 4;

  switch (steps) {
    case 0: {
      card.style.transform = `translateX(${cardWidth}px)`;
      steps++;
      break;
    }

    case 1: {
      card.style.transform = ``;
      steps++;
      break;
    }

    case 2: {
      card.style.transform = `translateX(-${cardWidth}px)`;
      steps++;
      break;
    }

    default: {
      card.style.transform = ``;
      steps = 0;
      bodyActiveValue--
    }
  }

  if (bodyActiveValue <= 0) {
    document.body.classList.add('active')
    position.style.display = 'none'

    setTimeout(() => {
      document.body.classList.remove('active')
      position.style.display = 'block'
      bodyActiveValue = 2
    }, 3000);
  }
});
