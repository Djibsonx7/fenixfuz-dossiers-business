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
