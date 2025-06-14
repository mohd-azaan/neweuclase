import React, { useState, useEffect } from 'react';
import './contact.css';
// import Header from '../../components/Header';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formData, setFormData] = useState({
		from_name: '',
		user_email: '', // Changed from from_email to user_email
		subject: '',
		message: '',
	});
	const [isSent, setIsSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isSending, setIsSending] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSending(true);

                const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
                const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
                const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

		const templateParams = {
			from_name: formData.from_name,
			user_email: formData.user_email, // Changed to user_email
			subject: formData.subject,
			message: formData.message,
			to_email: 'Info@euclase.in,mohiddinelaaf28@gmail.com',
			reply_to: formData.user_email, // Changed to user_email
		};

		emailjs
			.send(serviceID, templateID, templateParams, publicKey)
			.then(() => {
				setIsSent(true);
				setErrorMessage('');
				setFormData({
					from_name: '',
					user_email: '',
					subject: '',
					message: '',
				});
				setIsSending(false);
			})
			.catch((error) => {
				setErrorMessage('Failed to send the message, please try again.');
				console.error('EmailJS Error:', error);
				setIsSending(false);
			});
	};

	useEffect(() => {
		if (isSent) {
			const timer = setTimeout(() => setIsSent(false), 5000);
			return () => clearTimeout(timer);
		}
	}, [isSent]);

	return (
		<>
			{/* <Header /> */}
			<div className='contact-header'>
				<div className='contact-header-text'>CONTACT US</div>
			</div>
			<div className='contact-container'>
				<div className='contact-left'>
					<h1 className='contact-title'>Contact Us</h1>
					<p className='contact-description'>
						For more information about our services, or if you have any
						questions, please feel free to reach out to us. At Euclase, we are
						committed to providing innovative solutions and exceptional customer
						support
					</p>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<span>📍</span>
							<p>
								FAMCO Shop No.255 Sy.no.32 Venktapur Village Bhatkal, Uttara
								Kannada, Karnataka,India 581320
							</p>
						</div>
						<div className='contact-info-item'>
							<span>✉️</span>
							<p>Info@euclase.in</p>
						</div>
						<div className='contact-info-item'>
							<span>📞</span>
							<p>+91 99809 32933</p>
						</div>
					</div>
				</div>

				<div className='contact-right'>
					{isSent && (
						<p className='success-message'>
							Your message has been sent successfully!
						</p>
					)}
					{errorMessage && <p className='error-message'>{errorMessage}</p>}

					<form className='contact-form' onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='from_name' className='form-label'>
								Your Name
							</label>
							<input
								id='from_name'
								type='text'
								name='from_name'
								className='form-input'
								value={formData.from_name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='user_email' className='form-label'>
								Email
							</label>
							<input
								id='user_email'
								type='email'
								name='user_email'
								className='form-input'
								value={formData.user_email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='subject' className='form-label'>
								Subject
							</label>
							<input
								id='subject'
								type='text'
								name='subject'
								className='form-input'
								value={formData.subject}
								onChange={handleChange}
								required
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='message' className='form-label'>
								Your Message
							</label>
							<textarea
								id='message'
								name='message'
								className='form-textarea'
								value={formData.message}
								onChange={handleChange}
								required
							/>
						</div>

						<button
							type='submit'
							className='submit-button'
							disabled={isSending}
						>
							{isSending ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
