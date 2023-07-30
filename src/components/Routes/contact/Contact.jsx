import React from 'react'
import "./Contact.scss"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from '@emailjs/browser';
import { IoIosMail } from "react-icons/io"

function Contact() {
	// const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		const formToReset = document.getElementById("contact__form")

		emailjs.sendForm('service_eeerkr9', 'template_jrwx5ew', e.target, 'WC8yJsuVfaL-55OpD')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		formToReset.reset()
		alert("Form submitted successfully!")
	};

	return (
		<div className='contact'>
			<div className="contact__conatiner">
				<div className="contact__email-and-whatsapp">
					{/* <h3>Or</h3>
					<h4>Simply send a message by:</h4> */}
					<a className='email__link' href="mailto:info@tissen.tech"><IoIosMail /></a>
					{/* <button><a href="mailto:info@tissen.tech"><IoIosMail /></a></button> */}
					<a className='whats-app__link' href={`https://wa.me/541164210650?text=Hi`} target="_blank" rel="noreferrer">
						<BsWhatsapp />
					</a>
				</div>

				<h2 className='form-statement'>Give us some detales about your project.</h2>

				<form onSubmit={sendEmail} id='contact__form'>
					<div className="form__name-container form__field">
						<label htmlFor="name">Name</label>
						<input type="text" name='name' id='name'></input>
					</div>

					<div className="form__email-container form__field">
						<label htmlFor="email">Email</label>
						<input type="text" name='email' id='email' />
					</div>

					<div className="form__phone-container form__field">
						<label htmlFor="phone">Phone number</label>
						<input type="text" name='phone' id='phone' />
					</div>

					<div className="form__detales-container form__field">
						<label htmlFor="details">Details</label>
						<textarea name="details" id="details"></textarea>
					</div>

					<div className="form__button-container form__field">
						<label></label>
						<button id="submit" type="submit">Submit</button>
					</div>
					<p id="output"></p>
				</form>


				<div className="contact__conatiner--phone-container">
					<h2 className='contact__conatiner--statement'>Of couse you can call directly:</h2>
					<h4 className='contact__conatiner--phons'>Germany:  (+49) 176-8315-7254</h4>
					<h4 className='contact__conatiner--phons'>Argentina: (+54) 11-5763-9301</h4>
				</div>

			</div>
		</div>
	)
}

export default Contact