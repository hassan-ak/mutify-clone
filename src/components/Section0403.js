// Imports
// React Imports
import React from 'react';
// Images Imports
import Airpods from "../images/airpods-right-1edfc7c6a2.png";
// Web Animations imports
import useWebAnimations from "@wellyshen/use-web-animations";
// Styles Imports
import '../App.css';

export const Section0403 = () => {
    // use WebAnimations
    const { ref } = useWebAnimations({
        keyframes:[
            {transform: "translate(0px, 160px)"},
            {transform: "translate(0px, 0px)"}
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
        <img ref={ref} src={Airpods} alt="Right airpod"/>
    )
}
