document.querySelectorAll(".help-button").forEach(button => {
    button.addEventListener("click", function() {
        window.location.href = "helpandsupport.html";
    });
});
window.onload = function() {
    if (window.location.hash === "#settingsModal") {
      var settingsModal = document.getElementById("settingsModal");
  
      if (settingsModal) {
        settingsModal.style.display = "block";
      }
    }
  };