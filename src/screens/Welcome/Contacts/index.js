import React from 'react';
import './index.css'

const contacts = (props) =>{
    let social_contact = (
        props.social_contacts.map((c, i)=>{
            let keyName = Object.keys(c)[0];
            let icon = keyName ==="twitter" ? "fa-twitter" : keyName === "facebook" ? "fa-facebook" : "fa-instagram"
            let link = c[keyName]
            return(
                <a key={`${i}`} href={`${link}`}>
                    <i className={`fa ${icon}`}/>
                </a>
            )
        })
    )

    return(
        <div>
            <h4 className="title text-upper-case">Contacts</h4>
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
            <div className="contacts_section__social">
                {social_contact}
            </div>
        </div>
    )
}

export default contacts;