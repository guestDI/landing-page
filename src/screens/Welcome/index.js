import React, { Component } from 'react';
import "./index.css";
import NavigationBar from '../../shared_components/NavigationBar'
import PriceComponent from '../../shared_components/PriceComponent'
import Contacts from './Contacts'
import SocialContacts from './Contacts/SocialContacts/index'
import CommonButton from "../../shared_components/CommonButton";
import Youtube from "../../shared_components/Youtube/index"

const social_contacts = [
    {twitter: "https://twitter.com/"},
    {instagram: "https://www.instagram.com"},
    {facebook: "https://www.facebook.com/st1ll"},
    {linkedIn: "https://www.linkedin.com/in/roman-ventskus-9233a257/"}
]

const about_links = [
    {"О нас": "#"},
    {"Наша команда": "#"},
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
        this.refs.prices.scrollIntoView({block: 'start', behavior: 'smooth'});
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

    onDemoOpen = () => {
        window.location.href = 'https://www.gymcms.ru/demo';
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
                            <img src={require('../../images/android-chrome-256x256.png')} style={{width: '80px', height: '80px'}} />
                            <h1 className="text-upper-case" style={{paddingBottom: '20px'}}>
                                Лучший способ управления своим бизнесом
                            </h1>
                        </div>
                        <div className="welcome-text col-md-8 col-centered">
                            <p>Андромеда фитнес позволит легко управлять тренажерным залом, автоматизируя все необходимые операции, а также предоставляя возможность управления посещениями в один клик</p>
                        </div>
                        <div className="get_started_wrapper">
                            <CommonButton className="welcome_button" text="Начать" onClick={this.scrollInToSection}/>
                            <div className="scroll_down" >
                                <div className="scroll_down__button" style={{display: "block"}} onClick={this.scrollInToSection}/>
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
                            <h4>Эффективно организуйте работу</h4>
                            <p className="desc">Организует работу вашего тренажерного зала, контролируя ценовую политику и показатели работы персонала.</p>
                        </div>
                        <div className="service-tile col-lg-4 col-xs-4">
                            {/*<img src={require('../../../images/statistic.png')}  />*/}
                            <h4>Снижайте затраты</h4>
                            <p className="desc">Подробные отчеты позволяют выявить непопулярные занятия, услуги, персонал и минимизировать расходы на них.</p>
                        </div>
                        <div className="service-tile col-lg-4 col-xs-4">
                            {/*<img src={require('../../../images/statistic.png')}  />*/}
                            <h4>Экономьте время</h4>
                            <p className="desc">Все часто используемые действия автоматизированы и легко доступны. Программа автоматически напоминает
                                клиентам и персоналу о тренировках, позволяет контролировать расписание.</p>
                        </div>
                        <div style={{paddingTop: '30px'}}>
                            <div className="service-tile col-lg-4 col-xs-4">
                                {/*<img src={require('../../../images/statistic.png')}  />*/}
                                <h4>Мобильный клиент</h4>
                                <p className="desc"> Мобильный клиент позволит посетителям вашего зала использовать его в качестве единой карты доступа, а также для отслеживания текущго статуса абонементов.</p>
                            </div>
                            <div className="service-tile col-lg-4 col-xs-4">
                                {/*<img src={require('../../../images/rule.png')}  />*/}
                                <h4>Контролируйте посещения</h4>
                                <p className="desc">Контролируйте посещения в один клик. Нотификации по заканчивающимся картам позволяют вовремя предложить клиенту продление.</p>
                            </div>
                            <div className="service-tile col-lg-4 col-xs-4">
                                {/*<img src={require('../../../images/statistic.png')}  />*/}
                                <h4>Анализируйте</h4>
                                <p className="desc">Позволяет оценить показатели работы клуба и персонала. Отчеты по динамике продаж,
                                    посещений, выручке персонала.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="about-section">
                <div className="container demo-container">
                    <div className="row row-centered">
                        <div className="col-md-8 col-centered section-header">
                            <h2 className="text-upper-case">Демо</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row services-row">
                        <div className="col-md-12 col-centered section-header">
                            <div className="col-lg-5 col-sm-5 col-xs-5 ">
                                <p>
                                    Данное видео продемонстрирует вам все возможности системы andromeda, включая работу с клиентами,
                                    управление посещениями, работу с профилемя тренеров и клиентов и многое другое.
                                </p>
                                <p style={{paddingTop: '50px', paddingBottom: '10px'}}>
                                   Если вы все еще не уверены, что наша система может принести вам пользу и оптимизировать работу вашего зала, то мы предлагаем воспользоватсья возможностью
                                    попробовать ее в деле, используя специальный тестовый аккаунт
                                </p>
                                <CommonButton className="get_started_wrapper_button" text="Попробовать" onClick={this.onDemoOpen}/>
                            </div>
                            <div className="col-lg-7 col-sm-7 col-xs-7 col-centered  video">
                                <Youtube width="640" height="390"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section id="feedbacks" className="feedbacks_section">*/}
                {/*<div className="container" >*/}
                    {/*<div className="row row-centered">*/}
                        {/*<div className="col-md-8 col-centered section-header">*/}
                            {/*<h2 className="text-upper-case">Наши клиенты</h2>*/}
                            {/*<hr/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}

                    {/*</div>*/}
                {/*</div>*/}
            {/*</section>*/}

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
                            <PriceComponent price="Бесплатно" tariffName="Базовый" popular={true} onClick={this.onSignUpCall} duration="30 дней"/>
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
                            <Contacts />
                        </div>
                        {/*<div className="col-md-3 contact-section__about">*/}
                            {/*<AboutUs about_links={about_links}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="row row-centered social_icons">
                        <SocialContacts social_contacts={social_contacts}/>
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