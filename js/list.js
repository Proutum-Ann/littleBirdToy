document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid')
    const info = document.getElementById('productInfo')

    const render = list => {
        grid.innerHTML = ''
        info.innerHTML = ''

        // Generating Cards
        list.forEach(p => {
            const col = document.createElement('div')

            col.className = 'col-6 col-md-4 col-xl-3 my-3'
            col.innerHTML = `
            <div class="card p-2 rounded-0 productCard">
                <img src="..." class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn" id="modalbtn" data-bs-toggle="modal" data-bs-target="#${p.alt}Modal">
                        More information
                    </button>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="${p.alt}Modal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${p.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    </div>
                </div>
            </div>
            `

            grid.appendChild(col)
        })
    }
    
    render(products)
})
