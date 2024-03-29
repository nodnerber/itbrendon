// Function to increment and display the visit count
function incrementVisitCount() {
    // Check if 'visitCount' exists in localStorage
    if(localStorage.getItem('visitCount')) {
        // If 'visitCount' exists, increment the count by 1
        var count = parseInt(localStorage.getItem('visitCount'));
        count += 1;
        localStorage.setItem('visitCount', count);
    } else {
        // If 'visitCount' doesn't exist, initialize it with value 1
        localStorage.setItem('visitCount', 1);
    }

    // Display the visit count
    document.getElementById('visitCount').textContent = localStorage.getItem('visitCount');
}

// Call incrementVisitCount() when the page loads
window.onload = incrementVisitCount;