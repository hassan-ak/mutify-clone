// React Imports
import React from 'react';
// Images and video Imports
import Wave1 from "../videos/wave-white@1x.mp4";
import WaveWhite1 from "../images/wave-white-pic@1x-c0ee74053d.jpg";
import WaveWhite3 from "../images/wave-white.jpg";
import Mutify1 from "../images/mutify-logo-6ab64e5ad7.png";
// Web animations Imports
import useWebAnimations, {slideInUp} from "@wellyshen/use-web-animations";
// Styles Imports
import '../App.css';

export const Footer1 = () => {
    // useWebAnimations
    const { ref } = useWebAnimations({...slideInUp});
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__feedback">
                    <h2 className="title title_medium footer__title">Have an Idea or Feedback?</h2>
                    <a href="#header"><span className="__cf_email__">feedback@mutify.app</span></a>
                    <video src={Wave1} poster={WaveWhite1} muted autoPlay loop></video>
                    <img src={WaveWhite3}  alt=""/>
                </div>
                <nav className="main-nav footer__main-nav">
                    <div className="main-nav__inner">
                        <div ref = { ref } className="main-nav__logo">
                            <img src={Mutify1} alt="Mutify"/>
                            <span>Mutify</span>
                        </div>
                        <ul className="main-nav__menu">
                            <li><a href="#header">Works With</a></li>
                            <li><a href="#header">Noise Level</a></li>
                            <li><a href="#header">Switch Device</a></li>
                            <li><a href="/header">Privacy Policy</a></li>
                        </ul>
                        <a className="button button_small main-nav__button download-button" href="#header">Download</a>
                    </div>
                </nav>
                <div className="footer__copyright">Made by&nbsp;
                    <a href="#header">Hassan Ali Khan&nbsp;</a>
                    – as an Assignment Project during BootCamp2020. © 2019 Mutify. All right reserved
                </div>
            </div>
        </footer>
    )
}