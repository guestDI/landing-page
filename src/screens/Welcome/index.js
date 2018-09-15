import React, { Component } from 'react';
import "./index.css";
import NavigationBar from '../../shared_components/NavigationBar'
import ContactUs from '../../shared_components/ContactUs/index'
import PriceComponent from '../../shared_components/PriceComponent'
import Contacts from './Contacts'
import AboutUs from './AboutUs'
import CommonButton from "../../shared_components/CommonButton";

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
                                The best way to create your own tournament
                            </h1>
                            <hr/>
                        </div>
                        <div className="welcome-text col-md-8 col-centered">
                            <p>StartTournament can help you build your own tournament with your own rules and schedule!</p>
                        </div>
                        <div className="get_started_wrapper">
                            <button className="get_started_wrapper_button" onClick={() => this.scrollInToSection()}>
                                Get Started Now
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
                            <h2 className="text-upper-case">Core Features</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row services-row">
                        <div className="service-tile">
                            {/*<img src={require('../../../images/field.png')}  />*/}
                            <h3>Set tournament type</h3>
                            <p className="desc">Choose tournament type from season to knockout</p>
                        </div>
                        <div className="service-tile">
                            {/*<img src={require('../../../images/rule.png')}  />*/}
                            <h3>Set own rules</h3>
                            <p className="desc">Define rules for you tournament</p>
                        </div>
                        <div className="service-tile">
                            {/*<img src={require('../../../images/statistic.png')}  />*/}
                            <h3>Track statistic</h3>
                            <p className="desc">Track players statistic and create reports based on it</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="about-section">
                <div className="container">
                    <div className="row row-centered">
                        <div className="col-md-8 col-centered section-header">
                            <h2 className="text-upper-case">Recent Projects</h2>
                            <hr/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="team_section">
                <div className="container" >
                    <div className="row row-centered">
                        <div className="col-md-8 col-centered member_desc">
                            {/*<p>{this.state.team[this.state.activeMember].about}</p>*/}
                        </div>
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
                            <PriceComponent tariffName="Базовый" onClick={this.onSignUpCall}/>
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
                                <h4 className="title">Leave Message</h4>
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