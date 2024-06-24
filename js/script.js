//SEARCH

function search() {
  var input, filter, content, elements, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  content = document.getElementById("content");
  elements = content.getElementsByTagName("*");

  for (i = 0; i < elements.length; i++) {
    txtValue = elements[i].textContent || elements[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      elements[i].style.display = "";
    } else {
      elements[i].style.display = "none";
    }
  }
}
//CAROUSEL

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const indicators = document.querySelectorAll('.indicator');

const itemWidth = items[0].getBoundingClientRect().width;
let currentSlide = 0;

function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === parseInt(targetSlide.dataset.index));
  });
}

items.forEach((item, index) => {
  item.style.left = itemWidth * index + 'px';
  item.dataset.index = index;
});

nextButton.addEventListener('click', () => {
  const currentItem = track.querySelector(`[data-index='${currentSlide}']`);
  currentSlide = (currentSlide + 1) % items.length;
  const targetItem = track.querySelector(`[data-index='${currentSlide}']`);
  moveToSlide(track, currentItem, targetItem);
});

prevButton.addEventListener('click', () => {
  const currentItem = track.querySelector(`[data-index='${currentSlide}']`);
  currentSlide = (currentSlide - 1 + items.length) % items.length;
  const targetItem = track.querySelector(`[data-index='${currentSlide}']`);
  moveToSlide(track, currentItem, targetItem);
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    const targetIndex = parseInt(indicator.dataset.slide);
    const currentItem = track.querySelector(`[data-index='${currentSlide}']`);
    currentSlide = targetIndex;
    const targetItem = track.querySelector(`[data-index='${currentSlide}']`);
    moveToSlide(track, currentItem, targetItem);
  });
});





