import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { studies, experiences } from './data/resume'

function Resume() {
    return(
        <>
            <Link to="/">Home</Link>
            <span> - </span>
            <Link to="/projects">Proyectos</Link>
            <h1>Curriculum</h1>
            <h2>Estudios</h2>
            {studies.map(element => (
                <div>
                    <h3>Título: {element.title}</h3>
                    <p>Institución: {element.institution}</p>
                    <p>Fecha: {element.date}</p>
                </div>
            ))}
            <h2>Expericencia Laboral</h2>
            {experiences.map(element => (
                <div>
                    <h3>Título: {element.title}</h3>
                    <p>Compañia: {element.company}</p>
                    <p>Fecha: {element.date}</p>
                </div>
            ))}
        </>
    )
  
}

export default Resume