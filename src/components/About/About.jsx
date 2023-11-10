import React from "react";
import { Link } from "react-router-dom";
import style from './About.module.css';

const About = () => {
    return(
        <div className={style.container}>
            <ul className={style.subcontenedor}>
                <Link to = '/'>SALIR</Link>
                <Link to = '/home'>HOME</Link>
                <Link to = '/eventos'>EVENTOS</Link>
            </ul>
        </div>
    );
};

export default About;