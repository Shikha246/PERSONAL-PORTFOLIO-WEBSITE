
// Modal Functionality
const modalBtns = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

// Show Modal
modalBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        modals[i].style.display = 'block';
    });
});

// Hide Modal
closeBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        modals[i].style.display = 'none';
    });
});

// Hide Modal on click outside of content
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
