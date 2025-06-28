// --- Get References to Your HTML Elements ---
const formContainer = document.querySelector('.form-cunt'); // The main form element that slides
const formPages = document.querySelectorAll('.form-pg');   // All your individual form pages
const nextButtons = document.querySelectorAll('.next-btn'); // All 'Next' buttons
const backButtons = document.querySelectorAll('.back-btn'); // All 'Back' buttons

let currentPageIndex = 0; // Keep track of which page we're currently on (0-indexed)

// --- Function to Update the Form's Display (The Sliding Action) ---
function updateFormDisplay() {
    // Calculate how much to slide: (current page index * -100%)
    // E.g., page 0: 0 * -100% = 0 (no slide)
    //       page 1: 1 * -100% = -100% (slide left by one full page width)
    const translateXValue = -currentPageIndex * 100;
    formContainer.style.transform = `translateX(${translateXValue}%)`;

    // --- Update active class for pages (optional, but good for visual states) ---
    formPages.forEach((page, index) => {
        if (index === currentPageIndex) {
            page.classList.add('active'); // Add 'active' class to the current page
        } else {
            page.classList.remove('active'); // Remove 'active' from other pages
        }
    });

    // --- Manage Button Visibility ---
    // Hide/show next and back buttons based on current page
    nextButtons.forEach(button => {
        // Hide 'Next' on the last page (submit button should be there)
        const buttonPage = button.closest('.form-pg'); // Find the page this button belongs to
        if (buttonPage && buttonPage.id === 'page2') { // If it's the last page
            button.style.display = 'none';
        } else {
            button.style.display = 'inline-block'; // Or 'block', whatever your button display is
        }
    });

    backButtons.forEach(button => {
        // Hide 'Back' on the first page
        const buttonPage = button.closest('.form-pg');
        if (buttonPage && buttonPage.id === 'page1') { // If it's the first page
            button.style.display = 'none';
        } else {
            button.style.display = 'inline-block';
        }
    });

    // Special handling for the submit button on the last page
    const submitBtn = document.querySelector('.sub-btn');
    if (submitBtn) {
        const submitBtnPage = submitBtn.closest('.form-pg');
        if (submitBtnPage && submitBtnPage.id === 'page2') {
             submitBtn.style.display = 'inline-block'; // Show submit on last page
        } else {
             submitBtn.style.display = 'none'; // Hide submit on other pages
        }
    }
}


// --- Add Event Listeners for 'Next' Buttons ---
nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Make sure we don't go past the last page
        if (currentPageIndex < formPages.length - 1) {
            currentPageIndex++; // Move to the next page
            updateFormDisplay(); // Update the view
        }
    });
});

// --- Add Event Listeners for 'Back' Buttons ---
backButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Make sure we don't go before the first page
        if (currentPageIndex > 0) {
            currentPageIndex--; // Move to the previous page
            updateFormDisplay(); // Update the view
        }
    });
});


// --- Initial Setup ---
// Run once when the page loads to set the initial state
updateFormDisplay();