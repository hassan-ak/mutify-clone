// Imports
// React Imports
import React from 'react';
// Images Imports
import Muted from "../images/muted-screen-04789f86b7.png";
// Web Animations imports
import useWebAnimations from "@wellyshen/use-web-animations";
// Styles Imports
import '../App.css';

export const Section0401 = () => {
    // use WebAnimations
    const { ref } = useWebAnimations({
        keyframes:[
            {transform: "translate(-50px, 180px)"},
            {transform: "translate(50px, 0px)"}
        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
    // Component Return
    return (    
        <img ref={ref} className="switch-device__mutify-window-image" src={Muted} alt="Mutify window" title=""/>
    )
}
