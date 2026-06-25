// import SethRing from "../../assets/";
import "../../styles/components/layout/featured-projects.scss";

export default function FeaturedProjects() {
    return (
        <section className="section-featured-projects">
            <header>
                <h2>
                    <span className="text-kicker">Featured Work</span>
                    <span className="text-content">Projects That Delivered</span>
                </h2>
            </header>

            <div className="featured-projects__wrapper">
                <div className="featured-projects__list">
                    <div className="featured-projects__item">
                        <figure>
                        {/* Img or Video */}
                        </figure>
                        <div className="featured-projects__item-content">
                            <h3>
                                <span className="text-content">Project 1</span>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit odio, suscipit et nunc ac, elementum rutrum tellus. Praesent mollis laoreet placerat. Pellentesque est ligula, luctus nec ex sed, congue porta purus.</p>
                        </div>
                    </div>
                    <div className="featured-projects__item">
                        <figure>
                            {/* <video autoPlay muted loop playsInline>
                                <source src={SethRing} type="video/mp4" />
                            </video> */}
                        </figure>
                        <div className="featured-projects__item-content">
                            <h3>
                                <span className="text-content">Seth Ring</span>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit odio, suscipit et nunc ac, elementum rutrum tellus.</p>
                        </div>
                    </div>
                    <div className="featured-projects__item">
                        <figure>
                        {/* Img or Video */}
                        </figure>
                        <div className="featured-projects__item-content">
                            <h3>
                                <span className="text-content">Project 1</span>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit odio, suscipit et nunc ac, elementum rutrum tellus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}