document.getElementById('year').textContent = new Date().getFullYear();

const tabs = document.querySelectorAll('.showcase-tab');
const image = document.getElementById('showcaseImage');
const title = document.getElementById('showcaseTitle');
const text = document.getElementById('showcaseText');

if(tabs.length){
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      image.src = tab.dataset.img;
      title.textContent = tab.dataset.title;
      text.textContent = tab.dataset.text;
    });
  });
}
