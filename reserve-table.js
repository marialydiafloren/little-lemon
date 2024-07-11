document.addEventListener('DOMContentLoaded', function() {
    const indoorSeating = document.getElementById('indoor-seating');
    const outdoorSeating = document.getElementById('outdoor-seating');

    indoorSeating.addEventListener('change', function() {
        if (indoorSeating.checked) {
            outdoorSeating.checked = false;
        }
    });

    outdoorSeating.addEventListener('change', function() {
        if (outdoorSeating.checked) {
            indoorSeating.checked = false;
        }
    });
});
