const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const heartSize = Math.floor(Math.random() * 100);
  spanEl.style.width = heartSize + "px";
  spanEl.style.height = heartSize + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
const pEl = document.createElement("p");
pEl.innerText = "Move the mouse to see the magic";
bodyEl.appendChild(pEl);
setTimeout(() => {
  pEl.remove();
}, 5000);
