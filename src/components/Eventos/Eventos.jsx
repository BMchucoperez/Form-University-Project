import React, {useState} from "react";
import styles from './Eventos.module.css';
import Modal from 'react-modal';
import imagen1 from '../images/Manualidades.jpg';
import imagen2 from '../images/Musica.png';
import imagen3 from '../images/baile.jpg';
import imagen4 from '../images/teatro.jpg';
import imagen5 from '../images/expresion.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Eventos = ({onAgregarActividad}) => {
    const [nombre, setNombre] = useState('');
    const [detalle, setDetalle] = useState('');
    const [tipo, setTipo] = useState('');
    const [subtipo, setSubtipo] = useState('');
    const [graficoSeleccionado, setGraficoSeleccionado] = useState('');
    const [organizadoPor, setOrganizadoPor] = useState('');
    const [dirigidoA, setDirigidoA] = useState([]);
    const [capacidad, setCapacidad] = useState(1);
    const [ubicacion, setUbicacion] = useState('');
    const [fecha, setFecha] = useState('');
    const [horaInicio, setHoraInicio] = useState('06:00');
    const [horaFin, setHoraFin] = useState('07:00');
    const [isGraficosModalOpen, setIsGraficosModalOpen] = useState(false);
    const [isDocentesModalOpen, setIsDocentesModalOpen] = useState(false);
    const [docenteSeleccionado, setDocenteSeleccionado] = useState('');

    const handleDocenteSeleccionado = (docente) => {
        console.log('Seleccionando docente:', docente);
        setDocenteSeleccionado(docente);
        setIsDocentesModalOpen(false); // Cerrar la modal de docentes
    };

    const handleGraficoSeleccionado = (grafico) => {
        console.log('Seleccionando gráfico:', grafico);
        setGraficoSeleccionado(grafico);
        setIsGraficosModalOpen(false); // Cerrar la modal de gráficos
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    }

    const handleDetalleChange = (event) => {
        setDetalle(event.target.value);
    };
    
    const handleTipoChange = (event) => {
        setTipo(event.target.value);
        setSubtipo('');
        setGraficoSeleccionado('');
        setOrganizadoPor('');
        setDocenteSeleccionado('');
        setDirigidoA([]);
        setCapacidad(1);
        setUbicacion('');
        setFecha('');
        setHoraInicio('06:00');
        setHoraFin('07:00');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (nombre.trim() !== '' && capacidad > 0) {
          const nuevaActividad = {
            id: Date.now(), 
            nombre,
            detalle,
            tipo,
            subtipo,
            graficoSeleccionado,
            organizadoPor,
            docenteSeleccionado,
            dirigidoA,
            capacidad,
            ubicacion,
            fecha,
            horaInicio,
            horaFin,
          };
          onAgregarActividad(nuevaActividad);
          
          setNombre('');
          setDetalle('');
          setTipo('');
          setSubtipo('');
          setGraficoSeleccionado('');
          setOrganizadoPor('');
          setDocenteSeleccionado('');
          setDirigidoA([]);
          setCapacidad(1);
          setUbicacion('');
          setFecha('');
          setHoraInicio('06:00');
          setHoraFin('07:00');

        }
    };

    const subtipoOptions =
    tipo === 'talleresUnDia' || tipo === 'talleresProgramacion'
      ? ['Culturales', 'Deportivos']
      : ['Culturales', 'Deportivos', 'Académico', 'Salud', 'Consejería', 'Responsabilidad Social'];

    const opcionesGraficos = [
        { id: 1, imagen: imagen1, frase: 'Manualidades' },
        { id: 2, imagen: imagen2, frase: 'Música' },
        { id: 3, imagen: imagen3, frase: 'Baile' },
        { id: 4, imagen: imagen4, frase: 'Teatro' },
        { id: 5, imagen: imagen5, frase: 'Expresión' },
    ];
    
    const opcionesOrganizadoPor = [
        'Vida universitaria',
        'Empleabilidad',
        'Internacional',
        'Consejería',
        'Salud',
        'Responsabilidad Social',
        'Académico',
    ];

    const opcionesDirigidoA = [
        'Lima Centro',
        'Lima Sur',
        'Lima Norte',
        'Ate',
        'San Juan de Lurigancho',
        'Arequipa',
        'Piura',
        'Ica',
        'Chimbote',
        'Chiclayo',
        'Huancayo',
        'Trujillo',
    ];

    const listaDocentes = [
        'Nancy Saydy Pastor Armas',
        'Jessica Lorena Ugarte Pamo',
        'Esteban Felipe Paredes Castro ',
        'Alexander Sosa Valencia',
        'Zendy Rubi Morales Ugarte',
        'Leonel Ever Pamo Granda ',
        'Erika Milagros Quenaya Valencia',
        'Daniela Elizabeth Castro Castro',
        'Pamela Tatiana Cornejo Granda',
        'Stephanie Karla Sosa Cornejo',
        'Pool Gabriel García Morales',
        'Claudia Andrea Cornejo Morales',
    ];

    return(
        <div className={styles.container}>
            <h1>Crear un evento</h1>
            <form onSubmit={handleSubmit}>
                <label className={styles.nombre}>
                    Nombre del Evento:
                    <input type="text" value={nombre} onChange={handleNombreChange} maxLength={100} />
                </label>

                <label className={styles.detalle}>
                    Detalle del Evento:
                    <textarea value={detalle} onChange={handleDetalleChange} maxLength={400} />
                </label>

                <label className={styles.tipo}>
                    Tipo de Evento:
                    <select value={tipo} onChange={handleTipoChange}>
                        <option value="">Selecciona un tipo</option>
                        <option value="talleresUnDia">Talleres de un día</option>
                        <option value="talleresProgramacion">Talleres con programación</option>
                        <option value="conferencias">Conferencias</option>
                        <option value="concursos">Concursos</option>
                        <option value="activaciones">Activaciones</option>
                        <option value="otros">Otros</option>
                    </select>
                </label>

                <label className={styles.subtipo}>
                    Subtipo de Evento:
                    <select value={subtipo} onChange={(e) => setSubtipo(e.target.value)}>
                        <option value="">Selecciona un subtipo</option>
                        {subtipoOptions.map((option)=>(
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>

                <label className={styles.grafico}>
                    Gráfica para evento:
                    <button type="button" onClick={()=>setIsGraficosModalOpen(true)}>
                        Seleccionar Gráfico
                    </button>
                    {graficoSeleccionado && (
                        <div className={styles.graficoSelec}>
                            <img 
                            className={styles.imagen}
                            src={graficoSeleccionado.imagen} 
                            alt={`Gráfico ${graficoSeleccionado.id}`} />
                            <p>{graficoSeleccionado.frase}</p>
                        </div>
                    )}
                </label>

                <label>
                    Dirigido a (Selecciona uno o más):
                    <div className={styles.checkboxContainer}>
                        {opcionesDirigidoA.map((opcion) => (
                        <label key={opcion} className={styles.checkboxOption}>
                            <input
                                type="checkbox"
                                value={opcion}
                                checked={dirigidoA.includes(opcion)}
                                onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    setDirigidoA((prevDirigidoA) =>
                                        isChecked
                                            ? [...prevDirigidoA, opcion]
                                            : prevDirigidoA.filter((item) => item !== opcion)
                                    );
                                }}
                            />
                            {opcion}
                        </label>
                    ))}
                    </div>
                </label>

                <label className={styles.vacantes}>
                    Capacidad - Vacantes:
                    <input
                        type="number"
                        value={capacidad}
                        onChange={(e) => setCapacidad(Math.max(1, parseInt(e.target.value, 10)))}
                    />
                </label>

                <label className={styles.ubicacion}>
                    Ubicación:
                    <select value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}>
                        <option value="">Selecciona una ubicación</option>
                        <option value="lugar">Lugar</option>
                        <option value="zoom">Zoom</option>
                    </select>
                </label>


                <label className={styles.organizado}>
                    {organizadoPor === 'Académico' ? 'Buscar Docente:' : 'Organizado por:'}
                    {organizadoPor === 'Académico' ? (
                        
                        <div className={styles.academico}>
                            <button type="button" onClick={()=>setIsDocentesModalOpen(true)}>
                                Buscar Docente
                            </button>
                            <p>Docente Seleccionado: {docenteSeleccionado}</p>
                        </div>

                    ) : (
                        <select
                            value={organizadoPor}
                            onChange={(e) => setOrganizadoPor(e.target.value)}
                        >
                            <option value="">Selecciona una opción</option>
                            {opcionesOrganizadoPor.map((opcion) => (
                                <option key={opcion} value={opcion}>
                                    {opcion}
                                </option>
                            ))}
                        </select>
                    )}
                </label>
                
                <label>
                    Fecha:
                    <DatePicker className={styles.fecha} selected={fecha} onChange={(date) => setFecha(date)} />
                </label>

                <label>
                    Hora de inicio:
                    <TimePicker className={styles.hora} value={horaInicio} onChange={(time) => setHoraInicio(time)} />
                </label>

                <label>
                    Hora de fin:
                    <TimePicker className={styles.hora} value={horaFin} onChange={(time) => setHoraFin(time)} />
                </label>

                <br />

                <button className={styles.agregar} type="submit">Agregar Actividad</button>
                <Modal
                    isOpen={isGraficosModalOpen}
                    onRequestClose={()=>setIsGraficosModalOpen(false)}
                    contentLabel="Lista de Gráficos"
                    className={styles.modalGraficos}
                >
                    <h2>Lista de Gráficos</h2>
                    <ul>
                        {opcionesGraficos.map((grafico) => (
                            <li key={grafico.id} onClick={() => handleGraficoSeleccionado(grafico)}>
                                <img 
                                className={styles.imagen}
                                src={grafico.imagen} 
                                alt={`Gráfico ${grafico.id}`} 
                                />
                                <p>{grafico.frase}</p>
                            </li>
                        ))}
                    </ul>
                    <button onClick={()=>setIsGraficosModalOpen(false)}>Cerrar</button>
                </Modal>
                <Modal
                    isOpen={isDocentesModalOpen}
                    onRequestClose={()=>setIsDocentesModalOpen(false)}
                    contentLabel="Lista de Docentes"
                    className={styles.lista}
                >
                    <h2>Lista de Docentes</h2>
                    <ul>
                        {listaDocentes.map((docente) => (
                            <li key={docente} onClick={()=>handleDocenteSeleccionado(docente)}>{docente}</li>
                        ))}
                    </ul>
                    <button onClick={()=>setIsDocentesModalOpen(false)}>Cerrar</button>
                </Modal>
            </form>
        </div>
    );
};

export default Eventos;