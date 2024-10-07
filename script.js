// ---------------- Commodity-Location Dependent Fields ----------------

// Object to store locations for each commodity
const commodityLocations = {
    onion: ['Nashik', 'Pune', 'Ahmednagar'],
    potato: ['Agra', 'Kanpur', 'Indore']
};

// Function to update source location options based on selected commodity
function updateLocations() {
    const commoditySelect = document.getElementById('commodity');
    const locationSelect = document.getElementById('location');
   
    // Get the selected commodity
    const selectedCommodity = commoditySelect.value;
   
    // Clear the previous options in the location dropdown
    locationSelect.innerHTML = '';

    // Add new options based on the selected commodity
    commodityLocations[selectedCommodity].forEach(function(location) {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });
}

// Add event listener to update locations when commodity changes
document.getElementById('commodity').addEventListener('change', updateLocations);

// Call the function once on page load to set initial options
updateLocations(); 


// ---------------- Google Sign-In Integration ----------------

// Initialize Firestore
const db = firebase.firestore();

// Google Sign-In
const provider = new firebase.auth.GoogleAuthProvider();
let loggedInUser = null;

// Function to handle Google Sign-In
function signInWithGoogle() {
    console.log("Google sign-in button clicked");

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            loggedInUser = result.user;
            console.log('User logged in:', loggedInUser.email); // Log the user's email
        })
        .catch((error) => {
            console.error('Error during sign-in:', error);
        });
}

// Add event listener to Google Sign-In button
document.getElementById('google-signin-btn').addEventListener('click', signInWithGoogle);


// ---------------- Firestore Form Submission ----------------

// Handle form submission
document.getElementById('commodity-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent page reload

    if (!loggedInUser) {
        alert('Please log in with Google first!');
        return;
    }

    const commodity = document.getElementById('commodity').value;
    const location = document.getElementById('location').value;
    const size = document.getElementById('size').value;
    const quality = document.getElementById('quality').value;
    const price = document.getElementById('price').value;

    // Debugging: Log form data
    console.log('Form data:', { commodity, location, size, quality, price });

    // Add data to Firestore
    db.collection('commodityPrices').add({
        commodity: commodity,
        location: location,
        size: size,
        quality: quality,
        price: price,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert('Commodity price recorded successfully!');
        console.log('Data successfully written!');
    })
    .catch((error) => {
        console.error('Error writing document: ', error);
    });
});
