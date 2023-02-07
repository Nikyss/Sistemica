const btnSeta = document.querySelector('#seta');
const container = document.querySelector('.content-seta-profiles');

btnSeta.addEventListener('click', function() {
  const containerDisplay = window.getComputedStyle(container).display;

  if (containerDisplay === 'block') {
    container.style.display = 'none';
  } else {
    container.style.display = 'block';
  }
});