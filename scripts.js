
document.addEventListener('DOMContentLoaded', function(){
  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click', function(){
      var a = q.nextElementSibling;
      if(!a) return;
      var open = a.style.display === 'block';
      document.querySelectorAll('.faq-a').forEach(function(x){ x.style.display = 'none'; });
      if(!open) a.style.display = 'block';
    });
  });
  // simple fade-in on scroll
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(ent){ if(ent.isIntersecting) ent.target.classList.add('in'); });
  }, {threshold:0.15});
  document.querySelectorAll('.card, .testimonial, .gallery-grid img').forEach(function(el){ obs.observe(el); });
});