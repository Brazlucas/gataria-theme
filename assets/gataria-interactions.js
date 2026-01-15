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
});
