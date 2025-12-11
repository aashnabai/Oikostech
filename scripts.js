
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click', function(){
      var a = q.nextElementSibling;
      if(!a) return;
      var open = a.style.display === 'block';
      document.querySelectorAll('.faq-a').forEach(function(x){ x.style.display = 'none'; });
      if(!open) a.style.display = 'block';
    });
  });
});

// Intersection observer to add 'in' class for entry animations
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:0.12});

document.querySelectorAll('.card, .testimonial, .gallery-grid img, .service-card').forEach(function(el){ try{ io.observe(el);}catch(e){} });
