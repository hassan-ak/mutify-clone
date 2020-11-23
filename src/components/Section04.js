// Imports
// React Imports
import React from 'react';
// Images Imports
import Mockup from "../images/Mockup_010-d63c73e7e3.png";
import Wave from "../images/wave-3-e6584704b7.svg";
import Switch from "../images/switch-device-image-395c6d0238.png";
// Component Imports
import { Section0401 } from './Section0401';
import { Section0402 } from './Section0402';
import { Section0403 } from './Section0403';
// Styles Imports
import '../App.css';

export const Section04 = () => {
    return (
        <section className="switch-device">
            <div className="switch-device__inner container">
                <div className="switch-device__content">
                    <h2 className="title title_medium switch-device__title">Stay muted even on a newly connected device</h2>
                    <p>If you mute your mic on a call and switch to a new device, such as your AirPods, the app will detect the&nbsp;change and mute the new device as well</p>
                    <a className="button switch-device__button download-button" href="#header">Download</a>
                </div>
                <div className="switch-device__images-wrapper">
                    <img className="switch-device__macbook-image" src={Mockup} alt="MacBook" title=""/>
                    <Section0401></Section0401>
                    <div className="switch-device__airpods-wrapper">
                        <Section0402></Section0402>
                        <Section0403></Section0403>
                    </div>
                    <div className="switch-device__wave-wrapper">
                        <img src={Wave} alt=""/>
                    </div>
                </div>
                <img className="switch-device__full-image" src={Switch} alt="" role="presentation"/>
            </div>
        </section>
    )
}