{let current = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
   slides[current].classList.remove('active');
   dots[current].classList.remove('active');
   current = (n + slides.length) % slides.length;
   slides[current].classList.add('active');
   dots[current].classList.add('active');
}

// Keyboard arrow keys
document.addEventListener('keydown', (e) => {
   if (e.key === 'ArrowRight') goToSlide(current + 1);
   if (e.key === 'ArrowLeft') goToSlide(current - 1);
});}



// Dots click
//dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

// Auto slide every 4 seconds
//setInterval(() => goToSlide(current + 1), 4000);
{const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
   const target = +counter.getAttribute('data-target');
   const speed = 200;

   const update = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if(current < target){
         counter.innerText = current + increment;
         setTimeout(update,20);
      } else {
         counter.innerText = target;
      }
   };

   update();
});
}




// ====== EVENTS SLIDER ======
{
   const slider = document.querySelector('.events-slider');
   const dots = document.querySelectorAll('.events-dot');
   let current = 0;

   function goToSlide(n){
      dots[current].classList.remove('active');
      current = n;
      dots[current].classList.add('active');

      // smooth slide left
      slider.style.transform = `translateX(-${current * 33.333}%)`;
   }

   dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
   });
}