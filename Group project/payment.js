document.getElementById('submit-button').addEventListener('click', function() {
    const overlay = document.getElementById('success-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
    }
});
