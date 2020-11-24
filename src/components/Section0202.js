// Imports
// React Imports
import React from 'react';
// Web animations Imports
import useWebAnimations, {shakeY} from "@wellyshen/use-web-animations";
// Images Imports
import Appear1 from "../images/Appear-1ad98c17f8.png";
import gtm1 from "../images/GoToMeetings-6907108d0d.png";
import Zoom1 from "../images/Zoom-0cb3267633.png";
import Telegram1 from "../images/Telegram-d2ec968abe.png";
// Styles Imports
import '../App.css';

export const Section0202 = () => {
    // useWebAnimations
    const { keyframes, timing } = shakeY;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            iterations:Infinity,
            duration: timing.duration * 10,
        },
    });
    return (
        <div ref = {ref}>
            <div className="work-with__logo work-with__logo_appear">
                <img src={Appear1} alt="Appear"/>
                <span>Appear</span>
            </div>
            <div className="work-with__logo work-with__logo_go-to-meetings">
                <img src={gtm1} alt="GoToMeetings"/>
                <span>GoToMeetings</span>
            </div>
            <div className="work-with__logo work-with__logo_zoom">
                <img src={Zoom1} alt="Zoom"/>
                <span>Zoom</span>
            </div>
            <div className="work-with__logo work-with__logo_telegram">
                <img src={Telegram1} alt="Telegram"/>
                <span>Telegram</span>
            </div>
        </div>
    )
}