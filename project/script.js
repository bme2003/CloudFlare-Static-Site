document.addEventListener('DOMContentLoaded', function() {
    // Example: Change the background color on click
    const interactiveDiv = document.getElementById('interactive-side');
    interactiveDiv.addEventListener('click', function() {
        interactiveDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
});
