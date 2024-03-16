const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // Calculate the total width of the content
    const contentWidth = scrollerContent.reduce(
      (totalWidth, item) => totalWidth + item.offsetWidth,
      0
    );

    // Calculate how many times content needs to be repeated
    const repeatCount = Math.ceil(scroller.offsetWidth / contentWidth);

    // Clone and append the content based on repeatCount
    for (let i = 0; i < repeatCount; i++) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}
