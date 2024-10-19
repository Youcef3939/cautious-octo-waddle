// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching data and updating the dashboard
    loadDashboardData();

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmit);
});

// Function to load and display dashboard data
function loadDashboardData() {
    // Simulated data - replace with real API calls as needed
    const totalBins = 150;
    const totalWaste = '12,345 kg';
    const recyclingRate = '72%';

    document.getElementById('total-bins').textContent = totalBins;
    document.getElementById('total-waste').textContent = totalWaste;
    document.getElementById('recycling-rate').textContent = recyclingRate;
}

// Function to handle contact form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (can be extended)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');

    // Reset form fields
    contactForm.reset();
}

// Placeholder for map initialization (e.g., Google Maps or OpenStreetMap)
function initializeMap() {
    const mapContainer = document.getElementById('bin-map');
    mapContainer.textContent = 'Map would be displayed here with bin locations.';

    // You can replace this with actual map API logic
    // Example with Google Maps:
    // const map = new google.maps.Map(mapContainer, {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    // });
}
