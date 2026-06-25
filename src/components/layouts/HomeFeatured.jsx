import Button from "../ui/Button.jsx";
import TechList from "./TechList.jsx";
import "../../styles/components/layout/featured.scss";

export default function HomeFeatured() {
    return (
        <div className="section-featured">
            <header>
                <h1>
                    <span className="text-kicker">Precision-Built Websites · Available for New Projects</span>
                    <span className="text-content">Crafting Custom <br/>Wordpress & Shopify <br/>Experiences.</span>
                </h1>
                <p>A front-end developer at Infantree building custom themes, blocks, and SPAs — fast, precise, and tailored to your business goals.</p>
            </header>
            
            <div className="buttons">
                <Button children="View Recent Projects" href="/"/>
                <Button children="Let's Chat" href="/" variant="secondary"/>
            </div>

            <TechList/>           
        </div>
    )
}