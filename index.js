// Shows one page and hides the other two
document.querySelectorAll('span').forEach(span => {
    span.style.display = 'none';
});
function showPage(page) {

    // Hide all of the divs:
    document.querySelectorAll('span').forEach(span => {
        span.style.display = 'none';
    });

    // Show the div provided in the argument
    document.querySelector(`#${page}`).style.display = 'block';
}

// Wait for page to loaded:
document.addEventListener('DOMContentLoaded', function() {

    // Select all buttons
    document.querySelectorAll('button').forEach(button => {

        // When a button is clicked, switch to that page
        button.onclick = function() {
            showPage(this.dataset.page);
        }
    })
});
document.querySelector('.container').style.display = 'block';