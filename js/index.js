// Dynamic Font Size Scale
let currentScale = 1;

document.getElementById('btn-font-increase').addEventListener('click', () => {
  if (currentScale < 1.4) {
    currentScale += 0.1;
    document.documentElement.style.setProperty('--font-scale', currentScale);
  }
});

document.getElementById('btn-font-decrease').addEventListener('click', () => {
  if (currentScale > 0.8) {
    currentScale -= 0.1;
    document.documentElement.style.setProperty('--font-scale', currentScale);
  }
});

// High Contrast Toggle
document.getElementById('btn-contrast-toggle').addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});