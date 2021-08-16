import React from "react"
const Item = ({title="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png"}) => {
    return(
        <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={title} alt="..." />
                        </div>
                    </div>

    )

}

export default Item;