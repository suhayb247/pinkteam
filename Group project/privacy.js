document.querySelectorAll('input[type="checkbox"]').forEach(toggle => {
    toggle.addEventListener('change', (e) => {
      console.log(`${e.target.id} is now ${e.target.checked}`);
    });
  });
  