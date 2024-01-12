export function buttonAnimation(
  buttonSelector,
  containerSelector,
  animationDuration = 1000,
) {
  function createCircleIcon(container, posX, posY) {
    const circle = document.createElement("span");
    circle.classList.add("circle-button");
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;

    const timerId = setTimeout(() => {
      circle.remove();
      clearTimeout(timerId);
    }, animationDuration);

    container.appendChild(circle);
  }

  document.addEventListener("mousedown", function (event) {
    const button = event.target.closest(buttonSelector);
    const container = event.target.closest(containerSelector);

    if (button && container) {
      const offset = button.getBoundingClientRect();
      const posX = event.clientX - offset.left;
      const posY = event.clientY - offset.top;
      createCircleIcon(container, posX, posY);
    }
  });
}
