import React from 'react';
import "./index.css";
import CommonButton from "../CommonButton/index"

const priceComponent = (props) => {
    let popular = (
        props.popular ? <span className="pricing_popular">Popular</span>
        : null
    )

    return (
        <div className="pricing">
            {popular}
            <div className="pricing_head">
                <span className="price_title">{props.tariffName}</span>
                <div className="price">
                    <h3>
                        {props.price}
                        <span className="duration">{props.duration}</span>
                    </h3>
                </div>
            </div>
            <ul className="pricing_content">
                <li>
                    <p>1GB Disk Space</p>
                </li>
                <li>
                    <p>100 Email Account</p>
                </li>
                <li>
                    <p>24/24 Support</p>
                </li>
            </ul>
            <CommonButton className="submit_button" text="Выбрать" onClick={props.onClick}/>
        </div>
    );
}

export default priceComponent;