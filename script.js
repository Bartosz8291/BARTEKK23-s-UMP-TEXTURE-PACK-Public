// Dynamically update the <text> element
document.getElementById('change-text-btn').addEventListener('click', () => {
    const customText = document.getElementById('custom-text');
    customText.textContent = 'This text has been updated dynamically!';
    customText.style.color = '#4CAF50'; // Change text color to green
});
