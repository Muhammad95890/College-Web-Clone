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
{const counters = document.querySelectorAll('.stat-number');
    const totalDuration = 3000; // 4 seconds total

    const animateCounters = () => {
        let startTime = null;

        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / totalDuration, 1);

            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                counter.innerText = Math.floor(progress * target);
            });

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    // Start animation on load
    window.onload = animateCounters;
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