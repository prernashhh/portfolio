import { useState, useRef } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, error: false, message: 'Sending...' });

    emailjs.sendForm(
      'service_5o8ddjj',      // Your service ID
      'template_zudxxx9',     // Your template ID
      form.current,
      'YJmEOIyoFUNTiXuwM'     // Your public key
    )
    .then((result) => {
      setFormStatus({ 
        submitted: true, 
        error: false, 
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ user_name: '', user_email: '', message: '' });
    }, (error) => {
      setFormStatus({ 
        submitted: true, 
        error: true, 
        message: 'Something went wrong. Please try again.'
      });
      console.error('EmailJS error:', error);
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactWrapper}>
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formField}>
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={styles.submitButton} 
            disabled={formStatus.submitted && !formStatus.error}
          >
            Send Message
          </button>
          {formStatus.submitted && (
            <div className={formStatus.error ? styles.errorMessage : styles.successMessage}>
              {formStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
