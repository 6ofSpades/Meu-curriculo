document.addEventListener('DOMContentLoaded', () => {
  // Select all circles
  const circles = document.querySelectorAll('.circle');

  circles.forEach(circle => {
      // Get the percentage from the data attribute
      const percent = circle.getAttribute('data-percent');
      
      // Calculate and apply the gradient dynamically
      circle.style.background = `conic-gradient(#3498db 0% ${percent}%, #444 ${percent}% 100%)`;
  });
});
