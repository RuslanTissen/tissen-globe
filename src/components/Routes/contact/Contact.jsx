import React, { useRef } from 'react'
import "./Contact.scss"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from '@emailjs/browser';

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

		// formToReset.addEventListener("submit", (e) => {
		// 	e.preventDefault()
		// })
	};

	return (
		<div className='contact'>
			<div className="contact__conatiner">

				<h2>Give us some detales about your project.</h2>

				<form onSubmit={sendEmail} id='contact__form'>
					<div className="form__name__container form__field">
						<label htmlFor="name">Name</label>
						<input type="text" name='name' id='name'></input>
					</div>

					<div className="form__email__container form__field">
						<label htmlFor="email">Email</label>
						<input type="text" name='email' id='email' />
					</div>

					<div className="form__phone__container form__field">
						<label htmlFor="phone">Phone number</label>
						<input type="text" name='phone' id='phone' />
					</div>

					<div className="form__detales__container form__field">
						<label htmlFor="details">Details</label>
						<textarea name="details" id="details"></textarea>
					</div>

					<div className="form__button__container form__field">
						<label></label>
						<button id="submit" type="submit">Submit</button>
						{/* <button id="reset" type="reset"> Reste</button> */}
					</div>
					<p id="output"></p>
				</form>

				<div className="contact__email__and__whatsapp">
					<h3>Or</h3>
					<h4>Simply send a message by:</h4>
					<button><a href="mailto:rthyssen73@gmail.com">Click to Send an Email</a></button>
					{/* <br /> */}
					<a href={`https://wa.me/541164210650?text=Hi`} target="_blank">
						<BsWhatsapp />
					</a>
				</div>

				<div className="contact__conatiner__phone__container">
					<h2>Of couse you can call directly:</h2>
					{/* <h4>USA: </h4> */}
					<h4>Argentina: (+54) 11-6601-4163</h4>
					<h4>Germany:  (+49) 176-8315-7254</h4>
				</div>

			</div>
		</div>
	)
}

export default Contact