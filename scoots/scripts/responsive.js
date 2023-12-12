document.getElementById("hamburger").addEventListener("click", function () {
  var navList = document.querySelector("nav ul");

  // Toggle between flex and none
  navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';
});

// Add an event listener to reset the display property when the window is resized to a larger view
window.addEventListener('resize', function () {
  var navList = document.querySelector("nav ul");

  // Check if the screen width is larger than the specified threshold (e.g., 768 pixels for mobile)
  if (window.innerWidth > 430) {
    // Reset the display property to its default value (e.g., flex for larger views)
    navList.style.display = 'flex';
  }
  else {
    navList.style.display = 'none';
  }
});
