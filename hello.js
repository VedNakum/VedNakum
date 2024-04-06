window.onload = function() {
  // similar behavior as clicking on a link
  window.location.href = "https://vednakum.github.io/VedNakum/index.html";
}

function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

let scrolled = false
window.addEventListener('scroll', function(){
  if(window.scrollY > 100 && !scrolled) {
    scrolled = true;
    console.log('new section')
    const targetElement = document.getElementById('target')
    targetElement.style.display = "block" 
    targetElement.style.animation = "fade-down 0.5s" 
    animateValue("value", 0, 2000, 1);
    animateValue("value1", 0, 500, 1);
    animateValue("value2", 0, 20, 2);
  }
})

window.onload = function() {
  var path = window.location.pathname;
  if (path.endsWith('.html')) {
      var newPath = path.substring(0, path.length - 5); // Remove the .html extension
      window.history.replaceState({}, document.title, newPath);
  }
};

const numParticles = 50;
  const container = document.querySelector('.space'); // Changed to select .space div
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    container.appendChild(particle);
    resetParticle(particle);
  }

  // Reset particle position
  function resetParticle(particle) {
    const size = Math.random() * 4 + 1; // Random size between 1 and 5px
    const x = Math.random() * container.offsetWidth; // Use container width
    const y = Math.random() * container.offsetHeight; // Use container height
    const duration = Math.random() * 5 + 2; // Random duration between 2 and 7s
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.animationDuration = duration + 's';
  }