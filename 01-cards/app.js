const slidesPlugin = (activeElement = 0) => {
  const slides = document.querySelectorAll('.slide')

  slides[activeElement].classList.add('active')

  const clearActiveClasses = () => {
    slides.forEach(slide => {
      slide.classList.remove('active')
    })
  }

  for (const slide of slides) {
    slide.addEventListener('mouseover', () => {
      clearActiveClasses()
      slide.classList.add('active')
    })
  }
}

slidesPlugin(3)