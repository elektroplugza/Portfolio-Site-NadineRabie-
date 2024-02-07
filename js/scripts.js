// Add an event listener to the document
document.addEventListener('click', function(event) {
    var menu = document.getElementById('myNavtoggle');
    var target = event.target;

    // Check if the click target is not inside the menu
    if (!menu.contains(target)) {
        // Close the menu if it's open
        if (menu.classList.contains('responsive')) {
            menu.classList.remove('responsive');
        }
    }
});

// Function to toggle the menu
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.classList.contains('responsive')) {
        x.classList.remove('responsive');
    } else {
        x.classList.add('responsive');
    }
}



/* function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  } */
