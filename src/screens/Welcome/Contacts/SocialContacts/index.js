import React from 'react';
import './index.css'

const socialContacts = (props) =>{
    let social_contact = (
        props.social_contacts.map((c, i)=>{
            let keyName = Object.keys(c)[0];
            let icon = keyName ==="twitter" ? "fa-twitter" : keyName === "facebook" ? "fa-facebook" :
                keyName === "instagram" ? "fa-instagram" : keyName === "linkedIn" ? "fab fa-linkedin" : null
            let link = c[keyName]
            return(
                <a key={`${i}`} href={`${link}`}>
                    <i className={`fa ${icon}`}/>
                </a>
            )
        })
    )

    return(
        <div className="contacts_section__social">
            {social_contact}
        </div>
    )
}

export default socialContacts;