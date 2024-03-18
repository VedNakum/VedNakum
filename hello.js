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
  }
})
