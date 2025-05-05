import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsList = [
    {
      id: 1,
      name: "Alexandru Popescu",
      role: "Proprietar vilă",
      testimonial: "Am colaborat cu echipa Pantera Construct pentru construcția vilei mele și sunt extrem de mulțumit de rezultat. Profesionalism și calitate la fiecare etapă.",
      image: "../assets/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Maria Ionescu",
      role: "Director general companie",
      testimonial: "Sediul nostru nou a fost construit integral de Pantera Construct. Apreciem foarte mult respectarea termenelor și atenția la detalii.",
      image: "../assets/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Cristian Dumitrescu",
      role: "Investitor imobiliar",
      testimonial: "Am realizat mai multe proiecte cu această echipă și de fiecare dată au livrat la cele mai înalte standarde. Îi recomand cu încredere.",
      image: "../assets/testimonial3.jpg"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonialsList.length]);
  
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Ce spun clienții noștri</h2>
          <p>Experiențe ale celor care au ales serviciile noastre</p>
        </div>
        
        <div className="testimonials-slider">
          {testimonialsList.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-item ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <div className="quote">"</div>
                <p>{testimonial.testimonial}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-dots">
          {testimonialsList.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;