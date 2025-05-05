import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactează-ne</h2>
          <p>Suntem aici pentru a răspunde oricărei întrebări</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Adresă</h3>
                <p>Str. Constructorilor nr. 123, București, România</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h3>Telefon</h3>
                <p>+40 721 234 567</p>
                <p>+40 31 123 4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <h3>Email</h3>
                <p>office@panteraconstruct.ro</p>
                <p>info@panteraconstruct.ro</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-details">
                <h3>Program</h3>
                <p>Luni - Vineri: 08:00 - 18:00</p>
                <p>Sâmbătă: 09:00 - 14:00</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            {formSubmitted ? (
              <div className="form-success">
                Mesajul a fost trimis cu succes! Vă vom contacta în curând.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Numele dvs." 
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Telefon" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="Subiect" 
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Mesajul dvs." 
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Trimite mesaj</button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91158.55242876311!2d26.02647365!3d44.4377402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1682341293112!5m2!1sro!2sro" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Harta locație"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;