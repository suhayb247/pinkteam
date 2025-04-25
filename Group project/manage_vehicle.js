// Array to store image URLs
const vehicleImages = [
    'https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.jpg?s=612x612&w=0&k=20&c=vws8oDFjcfGpqNAybWPxsA9XROdcBh2MXW2PGEDgk-8=',
    'https://media.istockphoto.com/id/1186972461/photo/generic-white-car-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=CdH3KYWbyDu8sh_GulcgL3nLux4gkKks9dxZcXhikOA=',
    'https://media.istockphoto.com/id/1264208790/photo/car-in-a-studio.jpg?s=612x612&w=0&k=20&c=-CQ29s5QrFUNkRPhSXY8OmsTRu5_lyvGEis_gGmJGn4='
];

let currentImageIndex = 0;

// Function to change the image based on direction ('left' or 'right')
function changeImage(direction) {
    if (direction === 'left') {
        currentImageIndex = (currentImageIndex - 1 + vehicleImages.length) % vehicleImages.length;
    } else if (direction === 'right') {
        currentImageIndex = (currentImageIndex + 1) % vehicleImages.length;
    }

    const vehicleImg = document.getElementById('vehicle-img');
    vehicleImg.src = vehicleImages[currentImageIndex];
}

// Handle Set as Default button
const defaultBtn = document.getElementById('defaultBtn');
defaultBtn.addEventListener('click', () => {
    defaultBtn.classList.toggle('active');
    showToast('Default car set!');
});

// Show Info Overlay
function showInfoOverlay() {
    console.log("Info overlay triggered"); // Debugging line to check function call
    document.getElementById('info-overlay').classList.add('show');
}

// Close Info Overlay
function closeInfoOverlay() {
    document.getElementById('info-overlay').classList.remove('show');
}

// Live validation for registration plate
document.getElementById('reg-plate').addEventListener('input', function () {
    const pattern = /^[A-Z0-9\s-]{1,10}$/i;
    if (!pattern.test(this.value)) {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = '#ddd';
    }
});

// Toast message
function showToast(message) {
    const toast = document.getElementById('toast-message');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// Show the Add Car Form
document.querySelector('.add-btn').addEventListener('click', function() {
    document.getElementById('add-car-form').style.display = 'flex';
  });
  
  // Cancel and Hide the Add Car Form
  function cancelAddCar() {
    document.getElementById('add-car-form').style.display = 'none';
  }
  
  // Submit the Add Car Form
  document.getElementById('submit-new-car').addEventListener('click', function() {
    const regPlate = document.getElementById('new-reg-plate').value;
    const carModel = document.getElementById('new-car-model').value;
    const carImageInput = document.getElementById('new-car-image');
    const carImage = carImageInput.files.length > 0 ? URL.createObjectURL(carImageInput.files[0]) : "https://via.placeholder.com/150"; // Default image if none uploaded
  
    if (regPlate && carModel) {
      // Create a new vehicle object and update the page
      const newVehicleHTML = `
        <div class="vehicle-card">
          <img src="${carImage}" alt="New Car" class="vehicle-img"/>
          <div class="vehicle-info">
            <h3>${carModel}</h3>
            <p>Registration: ${regPlate}</p>
            <button onclick="setAsDefault()">Set as Default</button>
            <button onclick="removeCar()">Remove Car</button>
          </div>
        </div>
      `;
  
      // Append the new car details to the vehicle section (you can also update the current car display here)
      document.querySelector('.container').insertAdjacentHTML('beforeend', newVehicleHTML);
      
      // Close the form after submission
      document.getElementById('add-car-form').style.display = 'none';
      document.getElementById('new-reg-plate').value = ''; // Clear form fields
      document.getElementById('new-car-model').value = '';
      carImageInput.value = ''; // Clear image field
    } else {
      alert("Please fill in all required fields.");
    }
  });

  function setAsDefault() {
    alert("This car is now set as your default vehicle.");
    // Logic to highlight or mark the vehicle as default
  }
  
  function removeCar() {
    if (confirm("Are you sure you want to remove this vehicle?")) {
      // Logic to remove the vehicle from the list
      alert("Vehicle removed successfully.");
    }
  }