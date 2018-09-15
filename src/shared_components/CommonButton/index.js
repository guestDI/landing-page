import React  from 'react';
import './index.css'

const commonButton = props => {
   return (
        <button onClick={props.onClick} className={`${props.className} btn`} >{props.text}</button>
   )
}

export default commonButton;