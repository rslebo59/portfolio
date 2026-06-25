import Button from "../ui/Button.jsx";
import deskImg from "../../assets/computer-desk-programming.png";
import "../../styles/components/layout/group.scss";

export default function Group() {
    return (
        <section className="section-group">
            <div className="wrapper wrapper--lg">
                <div className="group-content">
                    <h2>
                        <span className="text--content">What I Offer</span>
                    </h2>
                    <p>From custom plugins to WooCommerce storefronts — I build focused, high-quality solutions for WordPress and Shopify clients.</p>

                    TAGS

                    <div className="buttons">
                        <Button children="View Recent Projects" href="/"/>
                        <Button children="Let's Chat" href="/" variant="secondary"/>
                    </div>
                </div>

                <div className="group-media">
                    <div className="group-media__card">
                        <figure className="group-media__figure">
                            <img src={deskImg} alt="Building websites" />
                        </figure>

                        <div className="group-media__card-content">
                            <div className="code-header" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#FF5F56"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#FFBD2E"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#27C93F"/>
                                </svg>
                            </div>

                            <code>{`const Services = {
                            plugins: 'Custom WordPress Plugins',
                            themes: 'Theme Customization',
                            perf: 'Performance Optimization',
                            ecomm: 'WooCommerce Development'
                            };`}</code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}