
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  loader.classList.add('hide');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});
