/* Gataria Custom Interactions */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🐱 Gataria Theme Loaded! Meow!');

  // Paw Print Click Effect
  document.addEventListener('click', (e) => {
    const paw = document.createElement('div');
    paw.classList.add('paw-print');

    // Random rotation for variety
    const rotation = Math.random() * 360;

    paw.style.left = `${e.pageX - 15}px`;
    paw.style.top = `${e.pageY - 15}px`;
    paw.style.transform = `rotate(${rotation}deg)`;

    document.body.appendChild(paw);

    // Remove element after animation
    setTimeout(() => {
      paw.remove();
    }, 1000);
  });

  // Add floating class to random elements (e.g., some images)
  const images = document.querySelectorAll('.card__media img');
  images.forEach((img, index) => {
    if (index % 3 === 0) { // Apply to every 3rd image for randomness
      img.classList.add('floating-element');
    }
  });

  // Confetti Logic
  const createConfetti = () => {
    const container = document.createElement('div');
    container.classList.add('gataria-confetti');
    document.body.appendChild(container);

    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF99C8', '#A9DEF9'];
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.classList.add('confetti-particle');

      // Random properties
      const left = Math.random() * 100;
      const delay = Math.random() * 2;
      const duration = 2 + Math.random() * 2;
      const color = colors[Math.floor(Math.random() * colors.length)] || '#FF6B6B';

      particle.style.left = `${left}vw`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.backgroundColor = color;

      // Random shape (simple css)
      if (Math.random() > 0.5) {
        particle.style.borderRadius = '50%';
      }

      container.appendChild(particle);
    }

    setTimeout(() => {
      container.remove();
    }, 4000);
  };

  // Trigger confetti on Add to Cart
  const addToCartButtons = document.querySelectorAll('button[name="add"], .product-form__submit');
  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      createConfetti();
    });
  });

  // Peek-a-boo Cat Logic
  const peekCat = document.querySelector('.gataria-peek-cat');
  if (peekCat) {
    const showCat = () => {
      peekCat.classList.add('visible');
      setTimeout(() => {
        if (!peekCat.matches(':hover')) {
          peekCat.classList.remove('visible');
        }
      }, 3000);
    };

    // Randomly show cat every 10-30 seconds
    const scheduleNextPeek = () => {
      const delay = 10000 + Math.random() * 20000;
      setTimeout(() => {
        showCat();
        scheduleNextPeek();
      }, delay);
    };

    scheduleNextPeek();
  }

  // Loader Logic (Intercept Fetch/XHR or listen to Shopify events if possible)
  // For now, we'll simulate it on form submissions or link clicks that might trigger page loads
  // A more robust way would be to hook into specific Shopify events if they exist in the theme

  // Example: Hook into cart updates
  document.addEventListener('cart:add', () => {
    // Show loader briefly? Or just rely on confetti.
    // Let's use the loader for page transitions if view transitions aren't enough
  });

  // Simple loader for "loading" class changes on body or main content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const target = mutation.target;
      if (!(target instanceof Element)) return;

      if (target.classList.contains('loading') || target.classList.contains('is-loading')) {
        const loader = document.querySelector('.gataria-loader-overlay');
        if (loader) loader.classList.add('active');
      } else {
        const loader = document.querySelector('.gataria-loader-overlay');
        if (loader) loader.classList.remove('active');
      }
    });
  });

  // Observe body for loading classes often used by themes
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

});
