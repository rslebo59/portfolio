import WordPress from "../../assets/wordpress-logo.svg?react";
import NodeJs from "../../assets/nodejs-logo.svg?react";
import React from "../../assets/react-logo.svg?react";
import Shopify from "../../assets/shopify-logo.svg?react";
import Php from "../../assets/php-logo.svg?react";
import "../../styles/components/layout/techlist.scss";

export default function TechList() {
    return (
        <div className="section-techstack">
            <span className="sr-only" aria-hidden="true">My Tech Stack</span>

            <ul className="techstack__list">
                <li className="techstack__item">
                    <WordPress/>
                    <span>WordPress</span>
                </li>
                <li className="techstack__item">
                    <Shopify/>
                    <span>Shopify</span>
                </li>
                <li className="techstack__item">
                    <React/>
                    <span>React</span>
                </li>
                <li className="techstack__item">
                    <NodeJs/>
                    <span>Node.js</span>
                </li>
                <li className="techstack__item">
                    <Php/>
                    <span>PHP</span>
                </li>
            </ul>
        </div>
    )
}