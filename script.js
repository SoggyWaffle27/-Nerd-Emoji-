const modeSwitcher = document.getElementById('modeSwitcher');
const body = document.body;

modeSwitcher.addEventListener('click', () => {
    // Toggle the dark mode class on the body element
    body.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        modeSwitcher.textContent = 'Light Mode';
    } else {
        modeSwitcher.textContent = 'Dark Mode';
    }
});
