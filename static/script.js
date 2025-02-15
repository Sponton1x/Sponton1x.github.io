document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    const images = document.querySelectorAll('.gallery img');

    images.forEach(image => {
        image.addEventListener('click', function () {
            modalImage.src = this.src;
            modalTitle.textContent = this.getAttribute('data-title');
            modalDescription.textContent = this.getAttribute('data-description');

            modal.style.display = "block";
        });
    });

    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

var texts = [
    'uczniem.',
    'hobbistą.',
];

var currentIndex = 0;
var currentText = "";
var isDeleting = false;
var typingSpeed = 200;

function typeText() {
  var typingTextElement = document.getElementById("typing-text");

  if (isDeleting) {
    currentText = texts[currentIndex].substring(0, currentText.length - 1);
    typingSpeed = 70;
  } else {
    currentText = texts[currentIndex].substring(0, currentText.length + 1);
    typingSpeed = 200;
  }

  typingTextElement.textContent = currentText;

  if (!isDeleting && currentText === texts[currentIndex]) {
    isDeleting = true;
    typingSpeed = 1000;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentIndex++;

    if (currentIndex >= texts.length) {
      currentIndex = 0;
    }

    typingSpeed = 200;
  }

  setTimeout(typeText, typingSpeed);
}

window.onload = typeText;