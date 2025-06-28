document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons that have the 'data-target' attribute
    const scrollButtons = document.querySelectorAll('.scroll-down-btn');

    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the ID of the target section from the data-target attribute
            const targetId = this.dataset.target; // 'this' refers to the button clicked
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Make the scroll animated
                    block: 'start'      // Align the top of the element to the top of the viewport
                });
            }
        });
    });
});


// Get your elements
const openModalBtn = document.getElementById('openP1modal'); // Assume you have a button with this ID
const modalOverlay = document.querySelector('.projOverlay');
const closeModalBtn = document.querySelector('.modal-close-btn');

// Function to open the modal
function openModal() {
    modalOverlay.classList.add('is-open');
}

// Function to close the modal
function closeModal() {
    modalOverlay.classList.remove('is-open');
}

// Event Listeners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close if clicked on the overlay itself (and not the modal content)
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) { // Only close if the click was directly on the overlay
        closeModal();
    }
});

// Close with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('is-open')) {
        closeModal();
    }
});