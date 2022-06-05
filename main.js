// DOM Document Object Model

/**Toggle Menu, abre e fecha o menu ao clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//adiciona o show ou tira quando necessario
for (const div of toggle) {
  div.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/**quando clicar em um item o menu fecha */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/**mudar o header da pagina quando scroll ¨Sombra¨ */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/**Testimonials slider */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },

  mousewhell: true,
  keyboard: true
})

/**ScrollReveal: mostrar elementos quando der scroll na pag */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 750,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/** Back to top button */

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
  if (window.scrollY >= 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})


/**Localização */

function localizar() {
  navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition(pos) {
  var lt = pos.coords.latitude
  var lg = pos.coords.longitude

  document.getElementById("geo").innerHTML = "Latitude: " + lt + ", Longitude: " + lg

  var map = L.map('map').setView([lt, lg], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicGxheWd1aXppbSIsImEiOiJjbDM5YzJuMXEwNG1hM2NwZXEwY3A0NW5jIn0.ScEycYzIYK1seiuG1GH2Sw'
  }).addTo(map);
   L.marker([lt, lg]).addTo(map);

   L.circle([lt, lg], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
  }).addTo(map);
}



