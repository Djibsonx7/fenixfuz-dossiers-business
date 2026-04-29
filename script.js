document.getElementById('year').textContent = new Date().getFullYear();

const tabs = document.querySelectorAll('.showcase-tab');
const image = document.getElementById('showcaseImage');
const title = document.getElementById('showcaseTitle');
const text = document.getElementById('showcaseText');

let currentIndex = 0;
let interval;

function showTab(index){
  const tab = tabs[index];

  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  image.src = tab.dataset.img;
  title.textContent = tab.dataset.title;
  text.textContent = tab.dataset.text;
}

function startAuto(){
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % tabs.length;
    showTab(currentIndex);
  }, 4000);
}

if(tabs.length){
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      currentIndex = index;
      showTab(currentIndex);
    });
  });

  startAuto();
}

const conversionDestination = 'AW-18123917652/G025COa2-s0qENSS1MUD';

function openTrackedLink(url) {
  if (typeof gtag !== 'function') {
    window.location.href = url;
    return;
  }

  let redirected = false;

  function redirect() {
    if (!redirected) {
      redirected = true;
      window.location.href = url;
    }
  }

  gtag('event', 'conversion', {
    send_to: conversionDestination,
    event_callback: redirect
  });

  setTimeout(redirect, 800);
}

document.querySelectorAll('a[href^="https://wa.me/221777989238"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    openTrackedLink(link.href);
  });
});
