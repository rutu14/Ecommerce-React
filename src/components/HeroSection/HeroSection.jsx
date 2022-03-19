import Images from "../../asset/image";

const HeroSection = () => {
    return(
        <section className="grid-70-30 hero-section">
            <img className="image-responsive hero-img" src={Images.landingPageImage} alt="Landing Page"/>
            <div className="hero-title text-center">
                <h2 className="heading1 medium hero-title-text">Discover everything you need here.</h2>
                <a href="#category" className="btn btn-primary text-uppercase m-t20 hero-btn td" role="button">
                    Explore<i className="bi bi-arrow-right inside-btn"></i>
                </a>                            
            </div>
        </section>
    );
}

export { HeroSection }