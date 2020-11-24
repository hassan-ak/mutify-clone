// Imports
// React Imports
import React from 'react';
// Web animations Imports
import useWebAnimations, {shakeY} from "@wellyshen/use-web-animations";
// Images Imports
import FB1 from "../images/FB-1b46484926.png";
import Viber1 from "../images/Viber-bcad9961af.png";
import Slack1 from "../images/Slack-a34e725729.png";
// Styles Imports
import '../App.css';

export const Section0203 = () => {
    // useWebAnimations
    const { keyframes, timing } = shakeY;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            iterations:Infinity,
            duration: timing.duration * 12,
        },
    });
    return (
        <div ref = {ref}>
            <div className="work-with__logo work-with__logo_fb">
                <img src={FB1} alt="FB Messenger"/>
                <span>FB Messenger</span>
            </div>
            <div className="work-with__logo work-with__logo_viber">
                <img src={Viber1} alt="Viber"/>
                <span>Viber</span>
            </div>
            <div className="work-with__logo work-with__logo_slack">
                <img src={Slack1} alt="Slack"/>
                <span>Slack</span>
            </div>
        </div>
    )
}