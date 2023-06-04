import React from 'react'
import "./Contact.scss"
import { BsWhatsapp } from "react-icons/bs"


function Contact() {
	return (
		<div className='contact'>
			<div className="contact__conatiner">
				<h2>Give us some detales about your project.</h2>
				<form action="rthyssen73@gmail.com">
					<div className="form__name__container form__field">
						<label for="name">Name</label>
						<input type="text" id='name'></input>
					</div>

					<div className="form__email__container form__field">
						<label for="email">Email</label>
						<input type="text" id='email' />
					</div>

					<div className="form__phone__container form__field">
						<label for="phone">Phone number</label>
						<input type="text" id='phone' />
					</div>

					<div class="form__toggle__container">
						<label for="toggleDate">I want to:</label>
						<input type="checkbox" name="toggleDate" id="toggleDate" />
						<input type="checkbox" name="toggleDate" id="toggleDate" />
						<input type="checkbox" name="toggleDate" id="toggleDate" />
						<input type="checkbox" name="toggleDate" id="toggleDate" />
					</div>

					<div class="form__detales__container form__field">
						<label for="details">Details</label>
						<textarea name="details" id="details"></textarea>
					</div>

					<div class="form__toggle__container form__field">
						<label></label>
						<button id="submit" type="submit">Submit</button>
						{/* <button id="reset" type="reset"> Reste</button> */}
					</div>
				</form>

				<h2>OR</h2>

				<h3>Simply send a message</h3>
				<button><a href="mailto:rthyssen73@gmail.com">Click to Send an Email</a></button>
				<br />
				<a href={`https://wa.me/541164210650?text=Hi`} target="_blank">
					<BsWhatsapp />
				</a>
			</div>

		</div>
	)
}

export default Contact