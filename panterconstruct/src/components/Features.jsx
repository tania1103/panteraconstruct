import React from 'react';
import './Features.css';

const Features = () => {
  const featuresList = [
    {
      id: 1,
      icon: "🏗️",
      title: "Construcții civile",
      description: "Case particulare, vile, blocuri rezidențiale și alte clădiri pentru uz civil"
    },
    {
      id: 2,
      icon: "🏭",
      title: "Construcții industriale",
      description: "Hale industriale, depozite și alte structuri pentru uz comercial"
    },
    {
      id: 3,
      icon: "🔨",
      title: "Renovări",
      description: "Modernizări, reabilitări și extinderi pentru clădiri existente"
    },
    {
      id: 4,
      icon: "📐",
      title: "Proiectare",
      description: "Servicii complete de proiectare și consultanță tehnică"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Serviciile Noastre</h2>
          <p>Oferim o gamă completă de servicii în domeniul construcțiilor</p>
        </div>
        <div className="features-grid">
          {featuresList.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;