document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid')
    const info = document.getElementById('productInfo')

    const render = list => {
        grid.innerHTML = ''
        info.innerHTML = ''
    }

    // Generating Cards
     list.forEach(p => {
        const col = document.createElement('div')

        col.className = 'col-6 col-md-4 col-xl-3'
        col.innerHTML = ``
     })
})