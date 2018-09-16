import React, { Component } from 'react';
import './index.css'
import Input from '../Input/index'
import Textarea from '../Textarea/index'

class ContactUs extends Component {
    render() {
        return (
            <form className="contact-form">
                <div className="row">
                    <div className="col-md-6 input-box" style={{paddingRight: '10px'}}>
                        <Input className="input-field" required min="6" max="14" type="text" onTextChanged={this.onUsernameChanged}
                               name="username" placeholder="Имя" />
                    </div>
                    <div className="col-md-6 input-box" style={{paddingLeft: '25px'}}>
                        <Input className="input-field" required min="6" max="14" type="text" onTextChanged={this.onSubjectChanged}
                               name="email" placeholder="Электронная почта" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 input-box">
                        <Input className="input-field" required min="6" max="14" type="text" onTextChanged={this.onSubjectChanged}
                               name="subject" placeholder="Тема" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 input-box">
                        <Textarea className="message-input-field" required min="6" max="256" type="text" onTextChanged={this.onMessageChanged}
                                  name="message" placeholder="Сообщение" />
                    </div>
                </div>
            </form>
        )

    }
}

export default ContactUs;