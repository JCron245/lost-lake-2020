import React from "react";
import "./Contact.scss";

function Contact() {
	return (
		<div className="Contact">
			<h1>Contact Us</h1>
			<p>
				Have any questions, comments, or need to reserve a spot? Here is our
				contact information so you can call, write, or visit us! We would love
				to hear from you!
			</p>
			<address className="address">
				<div className="address-section">
					<span className="address-label">Email: </span>
					<a href="mailto:lostlakeriverresort@gmail.com">
						lostlakeriverresort@gmail.com
					</a>
				</div>
				<div className="address-section">
					<span className="address-label">Phone: </span>
					<a href="tel:1-760-664-4413">1-(760)-664-4413</a>
				</div>
				<div className="address-section">
					<span className="address-label">Location: </span>
					We are located 31 miles north of Blythe California on highway 95 along
					the Colorado river.
				</div>
				<div className="address-section">
					<span className="address-label">Postal Address: </span>
					42500 US HWY 95
					<br />
					Blythe CA 92225
				</div>
			</address>
		</div>
	);
}

export default Contact;
