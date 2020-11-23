// Imports
// React Imports
import React from 'react';
// Images Imports
import Airpods from "../images/airpods-left-7c7413e6a7.png";
// Web Animations imports
import useWebAnimations from "@wellyshen/use-web-animations";
// Styles Imports
import '../App.css';

export const Section0402 = () => {
    // use WebAnimations
    const { ref } = useWebAnimations({
        keyframes:[
            {transform: "translate(-5px, 160px)"},
            {transform: "translate(-5px, 0px)"}
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
        <img ref={ref} src={Airpods} alt="Left airpod"/>
    )
}
