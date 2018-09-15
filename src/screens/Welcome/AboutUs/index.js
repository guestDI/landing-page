import React from 'react';
import './index.css'

const aboutUs = (props) =>{
    let about_links = (
        props.about_links.map((c, i)=>{
            let keyName = Object.keys(c)[0];
            let link = c[keyName]
            return(
                <li className="about_row">
                    <a key={`${i}`} href={`${link}`}>
                        {keyName}
                    </a>
                </li>
            )
        })
    )

    return(
        <div>
            <h4 className="title text-upper-case">About Us</h4>
            <ul className="contacts_section">
                {about_links}
            </ul>
        </div>
    )
}

export default aboutUs;