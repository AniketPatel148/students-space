import React from "react";
import emailjs from "emailjs-com";
import styles from "./Mentor.module.css";

import "./Mentor.css";

export default function ContactUs() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"gmail",
				"template_NtpkDAFc",
				e.target,
				"user_RYHmMFfsUwQRzX1cMMKp3"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<div className="joinOuterContainer">
			<div className="home-button">
				<a href="/"> Home</a>
			</div>
			<div className="joinInnerContainer">
				<h1 className="heading">Drop your mail here</h1>
				<form className="contact-form" onSubmit={sendEmail}>
					<div className={styles.input}>
						<label>Name</label>
						<input type="text" name="user_name" />
					</div>
					<div className={styles.input}>
						<label>Email</label>
						<input type="email" name="user_email" />
					</div>
					<div className={styles.input}>
						<label>Message</label>
						<textarea name="message" />
					</div>

					<button type="submit" className={styles.button}></button>
				</form>
			</div>
		</div>
	);
}
