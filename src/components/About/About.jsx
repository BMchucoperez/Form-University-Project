import React from "react";
import { Link } from "react-router-dom";
import style from './About.module.css';

const About = () => {
    return(
        <nav className={style.container}>
            <ul className={style.subcontenedor}>
                <div>
                    <li><Link to = '/' className={style.link}>SALIR</Link></li>
                    <li><Link to = '/home' className={style.link}>HOME</Link></li>
                    <li><Link to = '/eventos' className={style.link}>CREAR EVENTO</Link></li>
                </div>
                
            </ul>
        </nav>
    );
};

export default About;