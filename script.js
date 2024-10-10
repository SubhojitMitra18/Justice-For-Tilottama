const revealImage = document.querySelector('.reveal-image');

document.querySelector('.image-container').addEventListener('mousemove', function (e) {
  const { offsetX, offsetY } = e;
  const width = this.offsetWidth;
  const height = this.offsetHeight;

  const percentageX = (offsetX / width) * 100;
  const percentageY = (offsetY / height) * 100;

  revealImage.style.clipPath = `circle(15% at ${percentageX}% ${percentageY}%)`;
});

// Reset the image when the mouse leaves the container
document.querySelector('.image-container').addEventListener('mouseleave', function () {
  revealImage.style.clipPath = 'circle(0% at 0 0)';
});


document.querySelector('.image-container').addEventListener('touchmove', function (e) {
  const touch = e.touches[0]; // Get the first touch point
  const { clientX, clientY } = touch;
  
  const { left, top, width, height } = this.getBoundingClientRect();

  // Calculate the touch position relative to the image container
  const percentageX = ((clientX - left) / width) * 100;
  const percentageY = ((clientY - top) / height) * 100;

  revealImage.style.clipPath = `circle(15% at ${percentageX}% ${percentageY}%)`;
});

// Reset the image when touch ends (finger leaves the screen)
document.querySelector('.image-container').addEventListener('touchend', function () {
  revealImage.style.clipPath = 'circle(0% at 0 0)';
});
