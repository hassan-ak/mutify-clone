// Imports
// React Imports
import React from 'react';
// Web animations Imports
import useWebAnimations, {heartBeat} from "@wellyshen/use-web-animations";
// Images Imports
import FaceTimePopup1 from "../images/FaceTimePopup-8b68d7ca18.jpg";
// Styles Imports
import '../App.css';

export const Section0201 = () => {
    // useWebAnimations
    const { keyframes, timing } = heartBeat;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        iterations:Infinity,
        duration: timing.duration * 5,
      },
    });
  return (
    <img ref = {ref} src={FaceTimePopup1} alt="FaceTime Popup"/>
  )
}
