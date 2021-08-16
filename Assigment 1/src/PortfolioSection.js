import React from "react"
import Item from './Item'
const PortfolioSection = () => {
    return(
        <section className="page-section portfolio" id="portfolio">
        <div className="container">
            {/* <!-- Portfolio Section Heading--> */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
            <div className="row justify-content-center">
                <Item />
                <Item title="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png"/>
                <Item title="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png"/>
                <Item title="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png"/>
                <Item title="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" />
                <Item title="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png"/>
                
            </div>
        </div>
    </section>
    )

}

export default PortfolioSection;