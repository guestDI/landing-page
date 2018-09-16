import React, { Component } from 'react';
import "./index.css";
import NavigationBar from '../../shared_components/NavigationBar'
import ContactUs from '../../shared_components/ContactUs/index'
import PriceComponent from '../../shared_components/PriceComponent'
import Contacts from './Contacts'
import AboutUs from './AboutUs'
import CommonButton from "../../shared_components/CommonButton";
import Youtube from "../../shared_components/Youtube/index"

const social_contacts = [
    {twitter: "https://twitter.com/"},
    {instagram: "https://www.instagram.com"},
    {facebook: "https://www.facebook.com/"}
]

const about_links = [
    {"About Us": "#"},
    {"Our Team": "#"},
    {"Careers and Culture": "#"}
]

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signUpModal: null,
            showSignUpModal: true,

        };
    }

    scrollInToSection = () => {
        this.refs.prices.scrollIntoView({block: 'end', behavior: 'smooth'});
    }

    scrollToTop = () => {
        this.refs.intro.scrollIntoView({block: 'start', behavior: 'smooth'});
    }

    onSignUpCall = () => {
        window.location.href = 'https://www.gymcms.ru/registration';


        // const getAlert = () => (
        //     <SignUp show={this.state.showSignUpModal} close={() => this.cancelAlert()}/>
        // );
        //
        // this.setState({
        //     signUpModal: getAlert()
        // });
    }

    // cancelAlert = () => {
    //     this.setState({
    //         signUpModal: null
    //     });
    // }

    handleMemberClick = (index) => {
        this.setState({
            activeMember: index
        })
    }

    render() {
        return (
            <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

            <nav className="navbar navbar-fixed-top mainNav">
                <NavigationBar/>
            </nav>

            <section ref="intro" id="intro" className="intro-section">
                {/*<Carousel/>*/}
                <div className="container">
                    <div className="row row-centered">
                        <div className="welcome-header col-md-10 col-centered ">
                            <h1 className=" text-upper-case">
                                Лучший способ управления свом бизнесом
                            </h1>
                            <hr/>
                        </div>
                        <div className="welcome-text col-md-8 col-centered">
                            <p>Андромеда фитнес позволит легко управлять тренажерным залом</p>
                        </div>
                        <div className="get_started_wrapper">
                            <button className="get_started_wrapper_button" onClick={() => this.scrollInToSection()}>
                                Начать
                            </button>
                            <div className="scroll_down" >
                                <div className="scroll_down__button" style={{display: "block"}} onClick={() => this.scrollInToSection()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services-section">
                <div className="container">
                    <div className="row row-centered">
                        <div className="col-md-8 col-centered section-header">
                            <h2 className="text-upper-case">Возможности</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row services-row">
                        <div className="service-tile col-lg-4 col-xs-4">
                            {/*<img src={require('../../../images/field.png')}  />*/}
                            <h3>Эффективно организуйте работу</h3>
                            <p className="desc">Организует работу клуба -
                                контролируя прейскурант услуг ценовую политику и показатели работы.</p>
                        </div>
                        <div className="service-tile col-lg-4 col-xs-4">
                            {/*<img src={require('../../../images/rule.png')}  />*/}
                            <h3>Контролируйте посещения</h3>
                            <p className="desc">Легко контролируйте посещения</p>
                        </div>
                        <div className="service-tile col-lg-4 col-xs-4">
                            {/*<img src={require('../../../images/statistic.png')}  />*/}
                            <h3>Мобильный клиент</h3>
                            <p className="desc">Уникальная система выдачи мобильных абонементов, больше нет нужды носить с собой клубную карту.
                                Современный мобильный клиент позволит посетителям
                                вашего зала использовать его в качестве единой карты доступа, а также для отслеживания текущго статуса абонементов.</p>
                        </div>
                        <div className="service-tile col-lg-4 col-xs-4">
                            {/*<img src={require('../../../images/statistic.png')}  />*/}
                            <h3>Увеличивайте продажи</h3>
                            <p className="desc">CRM учитывает заинтересовавшихся и позволяет предложить им услуги фитнес клуба.
                                Рассрочка позволит клиенту большему числу клиентов приобрести дорогостоящие карты.</p>
                        </div>
                        <div className="service-tile col-lg-4 col-xs-4">
                            {/*<img src={require('../../../images/statistic.png')}  />*/}
                            <h3>Удерживаейте клиентов</h3>
                            <p className="desc">Отчеты по заканчивающимся картам позволяют вовремя предложить клиенту продление.</p>
                        </div>
                        <div className="service-tile col-lg-4 col-xs-4">
                            {/*<img src={require('../../../images/statistic.png')}  />*/}
                            <h3>Анализируйте</h3>
                            <p className="desc">Позволяет оценить показатели работы клуба и персонала. Отчеты по динамике продаж,
                                посещений, выручке персонала.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="about-section">
                <div className="container">
                    <div className="row row-centered">
                        <div className="col-md-8 col-centered section-header">
                            <h2 className="text-upper-case">Демо</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row services-row">
                        <Youtube/>
                    </div>
                </div>
            </section>
            <section id="feedbacks" className="feedbacks_section">
                <div className="container" >
                    <div className="row row-centered">
                        <div className="col-md-8 col-centered section-header">
                            <h2 className="text-upper-case">What people say</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </section>

            <section ref="prices" id="prices" className="prices-section">
                <div className="container">
                    <div className="row row-centered">
                        <div className="col-md-8 col-centered section-header">
                            <h2 className="text-upper-case">Цены</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row price-row">
                        <div className="col-xs-12 col-sm-4 price_col">
                            <PriceComponent price="Бесплатно" tariffName="Базовый" onClick={this.onSignUpCall} duration="30 дней"/>
                        </div>
                        {/*<div className="col-xs-12 col-sm-4 price_col">*/}
                            {/*<PriceComponent popular tariffName="Standart" onClick={this.onSignUpCall}/>*/}
                        {/*</div>*/}
                        {/*<div className="col-xs-12 col-sm-4 price_col">*/}
                            {/*<PriceComponent tariffName="Premium" onClick={this.onSignUpCall}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            <footer id="contact" className="footer-base footer-base-color contact-section">
                <div className="container">
                    <div className="row row-centered">
                        <div className="col-md-3 contact-section__contacts">
                            <Contacts social_contacts={social_contacts}/>
                        </div>
                        <div className="col-md-3 contact-section__about">
                            <AboutUs about_links={about_links}/>
                        </div>
                        <div className="col-md-5 col-xs-12 pull-right">
                            <div className="info">
                                <h4 className="title">Оставить сообщение</h4>
                                <ContactUs/>
                            </div>
                            <CommonButton className="send_message__button" text="Отправить" onClick={this.props.onClick}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="copyright">
                        © 2018 NTC team, made with love
                    </div>
                    <div className="scroll_top" onClick={this.scrollToTop}>
                        <div className="scroll_top__button" style={{display: "block"}}>
                            <span className="tooltip">Scroll To Top</span>
                        </div>
                    </div>
                </div>
            </footer>
                {this.state.signUpModal}
            </div>

        );
    }
}

export default Welcome;