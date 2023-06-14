const menuBtn = document.getElementById('burger-button');
const menuWrapper = document.getElementById('menu-wrapper');

menuBtn.addEventListener('click', () => {
  menuWrapper.classList.toggle('hidden');
  // menuBtn.classList.toggle('');
  document.getElementById('blur-cover').classList.toggle('invisible');
}
);
