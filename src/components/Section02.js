// Imports
// React Imports
import React from 'react';
// Images Imports
import FB1 from "../images/FB-1b46484926.png";
import Skype1 from "../images/Skype-64e68baaf2.png";
import Slack1 from "../images/Slack-a34e725729.png";
import Hangouts1 from "../images/Hangouts-de6270cae5.png";
import Viber1 from "../images/Viber-bcad9961af.png";
import Telegram1 from "../images/Telegram-d2ec968abe.png";
import Macbook1 from "../images/macbook-1-51fcc36e0a.png";
import Magnifier1 from "../images/magnifier-1878b93fb0.png";
import Wave2 from "../images/wave-2-ca2e74569e.svg";
// Component Imports
import { Section0201 } from './Section0201';
import { Section0202 } from './Section0202';
import { Section0203 } from './Section0203';
import { Section0204 } from './Section0204';
// Web animations Imports
import useWebAnimations, {zoomIn} from "@wellyshen/use-web-animations";
// Styles Imports
import '../App.css';

export const Section02 = () => {
    // useWebAnimations
    const { keyframes, timing } = zoomIn;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            iterations:Infinity,
            duration: timing.duration * 4,
        },
      });
    return (
        <section className="work-with" id="work-with">
            <div className="work-with__inner container">
                <div className="work-with__microphone-control">
                    <h2 className="title title_medium work-with__title">Control your&nbsp;microphone anywhere</h2>
                    <p>Even during calls</p>
                    <Section0201/>
                    <div className="work-with__logos-wrapper">
                        <Section0202/>
                        <Section0203/>
                        <Section0204/>
                        <div className="work-with__logo work-with__logo_skype work-with__logo_blurred">
                            <img src={Skype1} alt="Skype"/>
                        </div>
                        <div className="work-with__logo work-with__logo_viber work-with__logo_blurred">
                            <img src={Viber1} alt="Viber"/>
                        </div>
                        <div className="work-with__logo work-with__logo_telegram work-with__logo_blurred">
                            <img src={Telegram1} alt="Telegram"/>
                        </div>
                        <div className="work-with__logo work-with__logo_slack work-with__logo_blurred">
                            <img src={Slack1} alt="Slack"/>
                        </div>
                        <div className="work-with__logo work-with__logo_fb work-with__logo_blurred">
                            <img src={FB1} alt="FB Messenger"/>
                        </div>
                        <div className="work-with__logo work-with__logo_hangouts work-with__logo_blurred">
                            <img src={Hangouts1} alt="Hangouts"/>
                        </div>
                    </div>
                </div>            
                <div className="work-with__macbook-wrapper">
                    <img src={Macbook1} alt="MacBook"/>
                    <img ref = {ref} src={Magnifier1} alt="Mute button"/>
                    <div className="work-with__wave-wrapper">
                        <img src={Wave2} alt=""/>
                    </div>
                </div>
                <p>Use a shortcut or the touch bar on any&nbsp;Mac device to&nbsp;quickly mute your&nbsp;microphone</p>
                <div className="work-with__buttons-wrapper">
                    <a className="button work-with__button download-button" href="#header">Download</a>
                    <a className="button button_white button_bold work-with__button buy-button" href="#header">Buy: $4.99</a>
                </div>
            </div>
        </section>
    )
}