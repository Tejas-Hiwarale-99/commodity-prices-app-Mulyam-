// Initialize Firebase auth and Firestore (this is already in your HTML)

// Google Sign-In function
document.getElementById('googleSignIn').addEventListener('click', function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    // Sign in with Google
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            document.getElementById('userEmail').textContent = user.email;
            alert('Signed in successfully as ' + user.email);
        })
        .catch((error) => {
            console.error(error);
            alert('Error signing in: ' + error.message);
        });
});

// Handling the form submission
document.getElementById('priceForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const commodityType = document.getElementById('commodityType').value;
    const sourceLocation = document.getElementById('sourceLocation').value;
    const size = document.getElementById('size').value;
    const quality = document.getElementById('quality').value;
    const price = document.getElementById('price').value;
    const userEmail = document.getElementById('userEmail').textContent;
    const date = new Date().toLocaleDateString();

    // Basic form validation
    if (!commodityType || !sourceLocation || !size || !quality || !price || userEmail === 'Guest') {
        alert('Please fill in all fields and sign in before submitting.');
        return;
    }

    // Add data to Firestore
    db.collection('commodityPrices').add({
        userEmail: userEmail,
        date: date,
        commodityType: commodityType,
        sourceLocation: sourceLocation,
        size: size,
        quality: quality,
        price: price
    })
    .then(() => {
        alert('Data added to Firebase Firestore successfully!');
    })
    .catch((error) => {
        console.error('Error adding data: ', error);
        alert('Error submitting the form: ' + error.message);
    });
});
