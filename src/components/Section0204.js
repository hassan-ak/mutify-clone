// Imports
// React Imports
import React from 'react';
// Web animations Imports
import useWebAnimations, {shakeY} from "@wellyshen/use-web-animations";
// Images Imports
import Skype1 from "../images/Skype-64e68baaf2.png";
import Hangouts1 from "../images/Hangouts-de6270cae5.png";
import Webex1 from "../images/Webex-0b269eb5af.png";
// Styles Imports
import '../App.css';

export const Section0204 = () => {
    // useWebAnimations
    const { keyframes, timing } = shakeY;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            iterations:Infinity,
            duration: timing.duration * 15, // Speed up the animation
        },
    });
    return (
        <div ref = {ref}>
            <div className="work-with__logo work-with__logo_skype">
                <img src={Skype1} alt="Skype"/>
                <span>Skype</span>
            </div>
            <div className="work-with__logo work-with__logo_hangouts">
                <img src={Hangouts1} alt="Hangouts"/>
                <span>Hangouts</span>
            </div>
            <div className="work-with__logo work-with__logo_webex">
                <img src={Webex1} alt="Webex"/>
                <span>Webex</span>
            </div>
        </div>
    )
}