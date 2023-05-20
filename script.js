let index = 0
let autoInterval;
const prevBtn = document.getElementById('slide-left')
const nextBtn = document.getElementById('slide-right')
const slides = document.querySelectorAll('.slide');
const contents = document.querySelectorAll('.content')

nextBtn.addEventListener('click', (e) => {
  index++
  
  clearInterval(autoInterval)

  if(index >= slides.length) index = 0
  updateActiveSlide()
  updateContentSlide()

  // Resume the auto-update interval after 4 seconds 
  //if the user is not interacting with the navigation buttons.
  reassignInterval()
})

prevBtn.addEventListener('click', (e) => {
  index--

  clearInterval(autoInterval)

  if(index < 0 ) index = slides.length - 1
  updateActiveSlide()
  updateContentSlide()

  /// Resume the auto-update interval after 4 seconds 
  //if the user is not interacting with the navigation buttons.
  reassignInterval()
})


function updateActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[index].classList.add('active')
}

//auto updating slides if user is not interacting 
function autoUpdateSlides(){
  index++ 
  if(index >= slides.length) index = 0
  updateActiveSlide()
  updateContentSlide()
}

function updateContentSlide(){
  contents.forEach(content => {
    content.classList.remove('active')
    content.style = `animation-name: ''`
  })
  contents[index].classList.add('active')
  contents[index].style = `animation-name:  comes-in`
}

// setting up interval for autoupdate incase of non interaction
autoInterval = setInterval(() => {
  autoUpdateSlides()
}, 3000);

// Helper function to resume the auto-update interval 
//after it has been cleared due to user interaction.
function reassignInterval(){
  setTimeout(() => {
    autoInterval = setInterval(() => {
      autoUpdateSlides()
    }, 3000)
  }, 4000);
}


//NAVBAR FUNCTIONALITY
const mobileNav = document.querySelector('.mobile-navbar')

const openBtn = document.getElementById('mobile-toggle')
const closeBtn = document.querySelector('.mobile-close')

closeBtn.addEventListener('click', () => handleClose())
openBtn.addEventListener('click', () => handleOpen())

function handleClose(){
  mobileNav.setAttribute('aria-expanded', 'false')
}

function handleOpen(){
  mobileNav.setAttribute('aria-expanded', 'true')
}

