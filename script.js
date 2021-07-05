'use strict';

const panels = document.querySelectorAll('.panel');
// console.log(panels); // Nodelist
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

//remove active class when EventListener clicked
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
