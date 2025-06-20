document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid')
    const info = document.getElementById('productInfo')

    const render = list => {
        grid.innerHTML = ''
        info.innerHTML = ''

        // Generating Cards
        list.forEach(p => {
            const col = document.createElement('div')

            col.className = 'col-6 col-md-4 col-xl-3 my-3 d-flex align-item-center'
            col.innerHTML = `
            <div class="card p-2 rounded-0 productCard h-100">
                <img src="${p.mainImg}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${p.name}<br>$${p.price}</h5>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn" id="modalbtn" data-bs-toggle="modal" data-bs-target="#${p.alt}Modal">
                        Purchase
                    </button>
                </div>
            </div>
            `

            const mod = document.createElement('div')

            mod.innerHTML = `
            <!-- Modal -->
            <div class="modal fade" id="${p.alt}Modal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content card p-2 rounded-0">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 prodRev" id="exampleModalLabel">${p.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div class="row mx-auto">
                        <div class="col-md-4">
                            <div id="${p.alt}-default" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#${p.alt}-default" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#${p.alt}-default" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="${p.mainImg}" class="d-block w-100" alt="${p.alt}">
                                </div>
                                <div class="carousel-item">
                                <img src="${p.mainImg2}" class="d-block w-100" alt="${p.alt}">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${p.alt}-default" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${p.alt}-default" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>

                            <div id="${p.alt}-opt1" class="carousel slide d-none">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#${p.alt}-opt1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#${p.alt}-opt1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="${p.opt1Img1}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="${p.opt1Img2}" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${p.alt}-opt1" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${p.alt}-opt1" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>

                            <div id="${p.alt}-opt2" class="carousel slide d-none">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#${p.alt}-opt2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#${p.alt}-opt2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="${p.opt2Img1}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="${p.opt2Img2}" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${p.alt}-opt2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${p.alt}-opt2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>

                            <button class="btn my-3" onclick="openDefault('${p.alt}')">Default</button>
                            <button class="btn my-3" onclick="openOpt1('${p.alt}')" style="background-color: ${p.color}; border: 1px solid ${p.border};">${p.options.option1}</button>
                            <button class="btn my-3" onclick="openOpt2('${p.alt}')" style="background-color: ${p.color2}; border: 1px solid ${p.border2};">${p.options.option2}</button>
                        </div>

                        <!-- Info -->
                        <div class="col-md-8" style="text-align: left">
                            <h2 class="prodRev">About</h2>
                            <p>${p.description}</p>

                            <p><b>Measurements:</b> ${p.dimensions.fullMeasurement()}</p>
                            <p><b>Price:</b> $${p.price}</p>
                            <p><b>Age:</b>${p.age}</p>

                            <a class="btn w-100" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Buy Now!</a>
                        </div>
                    </div>

                    <div id="reviews">
                    <!-- Reviews -->
                        <div class="p-2" style="text-align: left">
                            <h3><span class="prodRev">${p.reviews.review1.username}</span> ${p.reviews.review1.rating}</h3>
                            <hr class="w-100">
                            <p style="text-align: left">${p.reviews.review1.review}</p>
                        </div>

                        <div class="p-2" style="text-align: left">
                            <h3><span class="prodRev">${p.reviews.review2.username}</span> ${p.reviews.review2.rating}</h3>
                            <hr class="w-100">
                            <p style="text-align: left">${p.reviews.review2.review}</p>
                        </div>

                        <div class="p-2" style="text-align: left">
                            <h3><span class="prodRev">${p.reviews.review3.username}</span> ${p.reviews.review3.rating}</h3>
                            <hr class="w-100">
                            <p style="text-align: left">${p.reviews.review3.review}</p>
                        </div>
                    </div>
                    
                    </div>
                    </div>
                </div>
            </div>
            `

            grid.appendChild(col)
            info.appendChild(mod)
        })
    }
    
    render(products)
})
function openDefault(id) {
    document.getElementById(`${id}-default`).classList.remove('d-none');
    document.getElementById(`${id}-opt1`).classList.add('d-none');
    document.getElementById(`${id}-opt2`).classList.add('d-none')
}
function openOpt1(id) {
    document.getElementById(`${id}-opt1`).classList.remove('d-none');
    document.getElementById(`${id}-default`).classList.add('d-none');
    document.getElementById(`${id}-opt2`).classList.add('d-none');
}
function openOpt2(id) {
    document.getElementById(`${id}-opt2`).classList.remove('d-none');
    document.getElementById(`${id}-default`).classList.add('d-none');
    document.getElementById(`${id}-opt1`).classList.add('d-none');
}