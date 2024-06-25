import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from './data/projects'

function Projects() {
    return(
        <>
            <Link to="/">Home</Link>
            <span> - </span>
            <Link to="/resume">Curriculum</Link>
            <h1>Mis Proyectos</h1>
            <div>
                {projects.map(element => (
                    <div>
                        <h2><a href={element.url} target="blank">{element.name}</a></h2>
                        <img src={element.image} />
                        <p>{element.description}</p>
                    </div>
                ))}

            </div>
            
        </>
    )
}

export default Projects