document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.getElementById('confirm-reservation');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    confirmButton.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'flex';
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
