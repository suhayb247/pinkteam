window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash
    if (hash === '#near-me') {
        console.log("near-me")
        const nearMe = document.getElementById("near-me")
        if (nearMe) nearMe.classList.add("active")
    } else {
        const normal = document.getElementById("normal")
        if (normal) normal.classList.add("active")
    }

    const reviews = document.querySelectorAll('.query-reviews-distance')
    reviews.forEach(query => {
        const [ratingBlock, rest] = query.innerHTML.split('•')
        const match = ratingBlock.trim().match(/^([\d.]+)\s*\((\d+)\)/)

        if (match) {
            const ratingAsFloat = parseFloat(match[1]).toFixed(1)
            const rating = parseFloat(match[1])
            const count = match[2]
            
            const fullStars = Math.floor(rating)
            const halfStar = rating % 1 >= 0.5 ? 1 : 0
            const emptyStars = 5 - fullStars - halfStar

            const stars = '★'.repeat(fullStars) + (halfStar ? '⯨' : '') + '☆'.repeat(emptyStars)

            query.innerHTML = `${ratingAsFloat} ${stars} (${count}) • ${rest.trim()}`
        }
    })

    const input = document.querySelector('.search-bar input')
    const searchButton = document.querySelector('.search-bar button')
    const iframe = document.getElementById('map-iframe')

    searchButton.addEventListener('click', () => {
        const query = input.value.trim()
        if (!query) return
    
        const search = encodeURIComponent(query + ' car park')
        iframe.src = `https://www.google.com/maps?q=${search}&output=embed`
    })

    

    
})