const btnNav = document.querySelector('.mobile-menu');
const containerNav = document.querySelector('.menu');
const contentMain = document.querySelector('main');

btnNav.addEventListener('click', function() {
  const containerNavDisplay = window.getComputedStyle(containerNav).display;

  if (containerNavDisplay === 'block') {
    containerNav.style.display = 'none';
    contentMain.style.display = 'block';
  } else {
    containerNav.style.display = 'block';
    contentMain.style.display = 'none';
  }
});
