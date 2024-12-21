const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentPage = 0;

nextButton.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

function updatePages() {
  pages.forEach((page, index) => {
    page.classList.remove('current', 'next', 'prev');
    if (index === currentPage) {
      page.classList.add('current');
    } else if (index === currentPage + 1) {
      page.classList.add('next');
    } else if (index === currentPage - 1) {
      page.classList.add('prev');
    }
  });
}
