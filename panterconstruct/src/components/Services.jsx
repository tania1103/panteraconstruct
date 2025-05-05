import React from 'react';
import './Services.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';

const Services = () => {
  const projects = [
    {
      id: 1,
      title: "Vilă rezidențială",
      category: "Construcție rezidențială",
      image: project1
    },
    {
      id: 2,
      title: "Hală industrială",
      category: "Construcție industrială",
      image: project2
    },
    {
      id: 3,
      title: "Sediu de birouri",
      category: "Construcție comercială",
      image: project3
    },
    {
      id: 4,
      title: "Apartamente de lux",
      category: "Complex rezidențial",
      image: project4
    },
    {
      id: 5,
      title: "Renovare clădire istorică",
      category: "Restaurare",
      image: project5
    },
    {
      id: 6,
      title: "Centru comercial",
      category: "Construcție comercială",
      image: project6
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Portofoliu</h2>
          <p>Proiecte reprezentative realizate de echipa noastră</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <button type="button" className="project-link">Vezi detalii</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;