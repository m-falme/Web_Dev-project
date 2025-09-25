// mobile nav
const navToggle = document.getElementById('navToggle');
if(navToggle){
  navToggle.addEventListener('click', ()=> {
    const nav = document.getElementById('mainNav') || document.getElementById('mainNav2') || document.getElementById('mainNav3') || document.getElementById('mainNav4');
    if(nav) nav.classList.toggle('open');
  });
}

// slider (simple auto-advance)
(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  if(!slides.length) return;
  let idx = 0;
  slides.forEach((s,i)=> s.style.opacity = (i===0?1:0));
  setInterval(()=> {
    slides[idx].classList.remove('active');
    slides[idx].style.opacity = 0;
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
    slides[idx].style.opacity = 1;
  }, 3500);
})();

// reveal on scroll
const revealItems = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  }, {threshold:0.12});
  revealItems.forEach(i => io.observe(i));
} else {
  revealItems.forEach(i => i.classList.add('visible'));
}

// contact form validation
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const msg = document.getElementById('formMsg');

    if(!name || !email || !phone || !message){
      msg.style.color = 'crimson';
      msg.textContent = 'Please fill all fields.';
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRe.test(email)){
      msg.style.color = 'crimson';
      msg.textContent = 'Enter a valid email.';
      return;
    }

    // fake submit for demo
    msg.style.color = 'green';
    msg.textContent = 'Message sent — thank you!';
    form.reset();
  });
}
