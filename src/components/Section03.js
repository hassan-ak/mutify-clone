// Imports
// React Imports
import React, {useRef,useEffect} from 'react';
// Images Imports
import Wave1 from "../images/wave-c1b84a9196.png";
// Styles Imports
import '../App.css';
// Section Export Function
export const Section03 = () => {
    // useRef for circles
    const c1 = useRef(null);
    const c2 = useRef(null);
    const c3 = useRef(null);
    const c4 = useRef(null);
    const c5 = useRef(null);
    const c6 = useRef(null);
    const c7 = useRef(null);
    const c8 = useRef(null);
    // Use Aniamtions
    useEffect(() => {
        c1.current.animate([{background: "hsla(0,0%,100%,.3)"},
                            {background: "white"},{background: "white"},{background: "white"},{background: "white"},{background: "white"},
                            {background: "white"},{background: "white"},{background: "white"}],
                            {duration: 1000,iterations: Infinity,direction: "alternate"});
        c2.current.animate([{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "white"},{background: "white"},{background: "white"},{background: "white"},{background: "white"},
                            {background: "white"},{background: "white"}],
                            {duration: 1000,iterations: Infinity,direction: "alternate"});
        c3.current.animate([{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "white"},{background: "white"},{background: "white"},{background: "white"},{background: "white"},
                            {background: "white"}],
                            {duration: 1000,iterations: Infinity,direction: "alternate"});
        c4.current.animate([{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "hsla(0,0%,100%,.3)"},
                            {background: "white"},{background: "white"},{background: "white"},{background: "white"},{background: "white"}],
                            {duration: 1000,iterations: Infinity,direction: "alternate"});
        c5.current.animate([{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "white"},{background: "white"},{background: "white"},{background: "white"}],
                            {duration: 1000,iterations: Infinity,direction: "alternate"});
        c6.current.animate([{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "white"},{background: "white"},{background: "white"}],
                            {duration: 1000,iterations: Infinity,direction: "alternate"});
        c7.current.animate([{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "hsla(0,0%,100%,.3)"},
                            {background: "white"},{background: "white"}],
                            {duration: 1000,iterations: Infinity,direction: "alternate"});
        c8.current.animate([{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "hsla(0,0%,100%,.3)"},{background: "hsla(0,0%,100%,.3)"},
                            {background: "white"}],
                            {duration: 1000,iterations: Infinity,direction: "alternate"});
    },[])
    //Function Return
    return (
        <section className="noise-level" id="noise-level">
            <div className="noise-level__inner container">
                <div className="noise-level__block">
                    <div className="noise-level__content">
                        <h2 className="title title_medium title_white noise-level__title">Easily control the volume level</h2>
                        <p>Use a shortcut to&nbsp;quickly access a&nbsp;window for your&nbsp;microphone volume&nbsp;controls</p>
                        <a className="button button_white" href="#header">Try It Free</a>
                    </div>
                    <div className="noise-level__right-block">
                        <img src={Wave1} alt=""/>
                        <div className="noise-level__circles-wrapper">
                            <div ref={c1} className="noise-level__circle"></div>
                            <div ref={c2} className="noise-level__circle"></div>
                            <div ref={c3} className="noise-level__circle"></div>
                            <div ref={c4} className="noise-level__circle"></div>
                            <div ref={c5} className="noise-level__circle"></div>
                            <div ref={c6} className="noise-level__circle"></div>
                            <div ref={c7} className="noise-level__circle"></div>
                            <div ref={c8} className="noise-level__circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
