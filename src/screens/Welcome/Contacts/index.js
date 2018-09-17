import React from 'react';
import './index.css'

const contacts = (props) =>{
    return(
        <div>
            <h4 className="title text-upper-case">Контакты</h4>
            <ul className="contacts_section">
                <li className="contact_row">
                    <i className="fa fa-map-marker"/>
                    <span>Main Str. no 45-46, b3, 56832,<br/>Minsk, Belarus</span>
                </li>
                <li className="contact_row">
                    <i className="fa fa-phone"/>
                    <span>375-29-876-47-67</span>
                </li>
                <li className="contact_row">
                    <i className="fa fa-envelope"/>
                    <span>ignatovich.dm@gmail.com</span>
                </li>
            </ul>
        </div>
    )
}

export default contacts;