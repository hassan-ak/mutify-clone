// React Imports
import React from 'react';
// Images and video Imports
import mutifyvideo1  from "../images/mutify-video-7a62103fb9.jpg";
import wave1  from "../images/wave-1-ddc3a23018.svg";
import mainScreen1  from "../videos/main-screen@1x.mp4";
// Web animations Imports
import useWebAnimations, {bounce} from "@wellyshen/use-web-animations";
// Styles imports
import '../App.css';

export const Section01 = () => {
    // useWebAnimations
    const { ref } = useWebAnimations({...bounce});
    return (
        <section className="intro">
            <div className="intro__inner container">
                <h1 className="title intro__title">Mutify for Mac</h1>
                <p>Use a shortcut or the touch bar on any&nbsp;Mac device to&nbsp;quickly mute your&nbsp;microphone</p>
                <div ref = {ref} className="intro__buttons-wrapper">
                <a className="button intro__button download-button" href="#header">Download</a>
                <a className="button button_white button_bold intro__button buy-button" href="#header">Buy: $4.99</a>
                </div>
                <div className="intro__video-wrapper">
                <video src={mainScreen1} poster={mutifyvideo1} muted autoPlay loop></video>
                <img src={mutifyvideo1} alt=""/>
                <div className="intro__wave-wrapper">
                    <img src={wave1} alt=""/>
                </div>
                </div>
            </div>
        </section>
    )
}
