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
                <img src="${p.mainImg}" class="card-img-top">
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
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content card p-2 rounded-0">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${p.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div class="col-md-3">
                        <div id="default" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#default" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#default" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="${p.mainImg}" class="d-block w-100" alt="${p.alt}">
                            </div>
                            <div class="carousel-item">
                            <img src="imgs/${p.alt}2.jpg" class="d-block w-100" alt="${p.alt}">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#default" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#default" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>

                        <div id="opt1" class="carousel slide d-none">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#opt1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#opt1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="${p.opt1Img1}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="${p.opt1Img2}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#opt1" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#opt1" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>

                        <div id="opt2" class="carousel slide d-none">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#opt2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#opt2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="${p.opt2Img1}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="${p.opt2Img2}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#opt2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#opt2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>

                        <button class="btn btn-primary" onclick="openDefault()">Default</button>
                        <button class="btn btn-primary" onclick="openOpt1()">Option 1</button>
                        <button class="btn btn-primary" onclick="openOpt2()">Option 2</button>
                    </div>
                    
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
function openDefault() {
    document.getElementById('default').classList.remove('d-none');
    document.getElementById('opt1').classList.add('d-none');
    document.getElementById('opt2').classList.add('d-none')
}
function openOpt1() {
    document.getElementById('opt1').classList.remove('d-none');
    document.getElementById('default').classList.add('d-none');
    document.getElementById('opt2').classList.add('d-none');
}
function openOpt2() {
    document.getElementById('opt2').classList.remove('d-none');
    document.getElementById('default').classList.add('d-none');
    document.getElementById('opt1').classList.add('d-none');
}