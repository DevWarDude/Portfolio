
export function slideFunction() {
  const nextEl = document.querySelector('.next')
  const prevEl = document.querySelector('.prev')
  const techCont = document.querySelectorAll('.technology-container')
  const img = document.querySelector('.technology-container img')

  
  let currentImg = 1;
  let timeout;
  
  nextEl.addEventListener('click', () => {
    currentImg++
    clearTimeout(timeout);
    updateImage();
  });
  
  prevEl.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
  });

  updateImage();
  
  function updateImage() {
    if (currentImg > techCont.length) {
      currentImg = 1;
    } else if (currentImg < 1){
      currentImg = techCont.length;
    };

    techCont.forEach(elem => {
      elem.style.transform = `translateX(-${(currentImg - 1) * img.width }px)`;
    });

    timeout = setTimeout(() => {
      currentImg++;
      updateImage();
    },4000);
  };
};