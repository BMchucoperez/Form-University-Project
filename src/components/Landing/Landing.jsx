import React from "react";
import { Link } from "react-router-dom";
import styles from './Landing.module.css'

const Landing = () => {
    return(
        <div className={styles.land}>
            <h1>Registro de Eventos Universitarios</h1>
            <Link to = {'/home'}>
                <button>INGRESAR</button>
            </Link>
        </div>
    );
};

export default Landing;