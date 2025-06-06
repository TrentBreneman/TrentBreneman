import React, { useEffect, useRef, useState, useCallback } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = contactRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => (prevErrors[name as keyof typeof prevErrors] ? { ...prevErrors, [name]: '' } : prevErrors));
    if (submissionStatus !== 'idle') {
      setSubmissionStatus('idle');
      setSubmissionMessage('');
    }
  }, [submissionStatus]);

  const validateForm = useCallback(() => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionMessage('');
    setSubmissionStatus('idle');
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_FORM_ID';

        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionStatus('success');
          setSubmissionMessage('Thank you for your message! I will get back to you soon.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          const data = await response.json();
          setSubmissionStatus('error');
          setSubmissionMessage(data.error || 'Oops! There was a problem sending your message. Please try again.');
          console.error('Formspree error:', data);
        }
      } catch (error) {
        setSubmissionStatus('error');
        setSubmissionMessage('There was an unexpected error. Please try again later or reach out directly.');
        console.error('Network error during form submission:', error);
      }
    }
    setIsSubmitting(false);
  }, [formData, validateForm]);

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={contactRef} aria-labelledby="contact-heading">
      <h2 id="contact-heading">CONTACT ME</h2>
      <p className="contact-intro-text">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>

      <div className="contact-content-wrapper">
        <form className="contact-form" onSubmit={handleSubmit} noValidate aria-live="polite">
          <div className="form-group">
            <label htmlFor="name">Name<span className="required-asterisk" aria-hidden="true">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className="error-message">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<span className="required-asterisk" aria-hidden="true">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message<span className="required-asterisk" aria-hidden="true">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {errors.message && <p id="message-error" className="error-message">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </>
            )}
          </button>
          {submissionMessage && (
            <p
              className={`submission-message ${submissionStatus === 'success' ? 'success' : 'error'}`}
              role={submissionStatus === 'error' ? 'alert' : 'status'}
            >
              {submissionMessage}
            </p>
          )}
        </form>

        <div className="contact-social-links">
          <h3>Or connect with me directly:</h3>
          <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Connect with Trent on LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="View Trent's GitHub Profile">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="mailto:tbreneman@icloud.com" className="social-link" aria-label="Send an email to Trent">
            <FontAwesomeIcon icon={faPaperPlane} /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;