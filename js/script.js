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