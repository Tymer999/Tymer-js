const navElement = document.getElementById('js-nav');
const closeBtnElement = document.getElementById('js-close-nav-btn');
const toggleBtnElement = document.getElementById('js-nav-toggle');

toggleBtnElement.addEventListener('click', () => {
  navElement.classList.toggle('show-nav');
});

closeBtnElement.addEventListener('click', () => {
  navElement.classList.remove('show-nav');
})