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
      // Go to the previous image
      currentImageIndex = (currentImageIndex - 1 + vehicleImages.length) % vehicleImages.length;
    } else if (direction === 'right') {
      // Go to the next image
      currentImageIndex = (currentImageIndex + 1) % vehicleImages.length;
    }
  
    // Set the new image
    const vehicleImg = document.getElementById('vehicle-img');
    vehicleImg.src = vehicleImages[currentImageIndex];
  }

  // Toggle "Set as default" button
const defaultBtn = document.getElementById('defaultBtn');

defaultBtn.addEventListener('click', () => {
  defaultBtn.classList.toggle('active');
});