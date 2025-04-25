
window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    const hash = window.location.hash
    if (hash === '#near-me') {
        console.log("near-me")
        document.getElementById("near-me").classList.add("active")
    } else {
        document.getElementById("normal").classList.add("active")
          }
        }
    )
      
document.querySelectorAll('.fa-bookmark').forEach(bookmark => {
    bookmark.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the parent button
        bookmark.classList.toggle('fa-regular'); // Outline icon
        bookmark.classList.toggle('fa-solid');  // Filled icon (saved)
    });
});

document.getElementById("query-title").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "flex"
    })
    
    function hideOverlay() {
    document.getElementById("overlay").style.display = "none"
    }

