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
                    <h4>
                        {props.price}
                        <span className="duration">{props.duration}</span>
                    </h4>
                </div>
            </div>
            <ul className="pricing_content">
                <li>
                    <p>Работайте с системой без каких-либо ограничений</p>
                </li>
                <hr/>
                <li>
                    <p>Регистрация неограниченного числа клиентов</p>
                </li>
                <hr/>
                <li>
                    <p>Мобильный клиент с возможностью испольлзовать онлайн абонемент</p>
                </li>
                <hr/>
                <li>
                    <p>Формирование отчетности без каких-либо ограничений</p>
                </li>
                <hr/>
                <li>
                    <p>Круглосуточная поддержка</p>
                </li>
            </ul>
            <CommonButton className="submit_button" text="Выбрать" onClick={props.onClick}/>
        </div>
    );
}

export default priceComponent;