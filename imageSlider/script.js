var images = ['maldives.jpg', 'macau.jpg', 'ireland.jpg', 'taiwan.jpg', 'chef.jpg', 'room.jpg', 'code.jpg'];
var current= 0;

let left = document.querySelector('#arrowLeft'),
    right = document.querySelector('#arrowRight'),
    lines = document.querySelector('.line');




function slideShow() {
    document.querySelector('#image').src = images[current];

    if (current < (images.length - 1)) {
        current++;
    } else {
        current = 0;
    }
    
}

function reset() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
  }

  // Show prev
  function slideLeft() {
    reset();
    images[current - 1].style.display = "block";
    current--;
  }


  // Left arrow click
left.addEventListener("click", function() {
    if (current === 0) {
      current = images.length;
    }
    slideLeft();
  });






setInterval(slideShow, 5000);