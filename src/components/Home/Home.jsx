import React from "react";
import styles from './Home.module.css';

const Home = ({actividades}) => {
   
    return(
        <div>
            <h1>Lista de Eventos</h1>
            
            <ul className={styles.listaActividades}>
                {actividades.map((actividad) => (
                    <li key={actividad.id} className={styles.actividadItem}>
                        <h2>{actividad.nombre}</h2>
                        <div className={styles.info}>
                            <strong>Detalle: {actividad.detalle}</strong> 
                            <strong>Tipo: {actividad.tipo}</strong> 
                            <strong>Subtipo: {actividad.subtipo}</strong> 
                            <strong>Gráfico: {actividad.graficoSeleccionado.frase}</strong> 
                            <strong>Organizado por: {actividad.organizadoPor}</strong> 
                            <strong>Docente: {actividad.docenteSeleccionado}</strong> 
                            <strong>Dirigido a: {actividad.dirigidoA.join(', ')}</strong> 
                            <strong>Capacidad: {actividad.capacidad}</strong> 
                            <strong>Ubicación: {actividad.ubicacion}</strong>
                            <strong>Fecha: {actividad.fecha.toLocaleDateString()}</strong> 
                            <strong>Hora de inicio: {actividad.horaInicio}</strong> 
                            <strong>Hora de fin: {actividad.horaFin}</strong> 
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;