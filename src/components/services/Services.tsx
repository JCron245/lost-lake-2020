import React from "react";
import "./Services.scss";
import GeneralStore from "../../assets/general.png";
import { Card } from "react-bootstrap";

function Services() {
	return (
		<div className="Services">
			<h1>Services</h1>
			<p>
				In the summertime the General Store is open on weekends from 7:00am to
				10:00pm for your convenience at all other times including most holidays
				the general store is open 7 days a week from 7:00am to 7:00pm.
			</p>
			<p>
				If you need it we have it. The store is always well stocked with a
				variety of grocery items for just about any type of meal. We serve
				convenient food you can order from our menu including our most popular,
				biscuits and gravy, pizza and more.
			</p>
			<p>
				The general store carries clothing apparel for all sizes and seasons. As
				well as unique gifts and souvenirs. Our hardware department is well
				stocked with plumbing and electrical supplies. We also carry water craft
				repair items including oil additives.
			</p>
			<div id="amenitiesContainer">
				<Card>
					<Card.Body>
						<Card.Title>Amenities</Card.Title>
						<ul>
							<li>Full RV hook ups </li>
							<li>Gas and Propane</li>
							<li>Launch ramp</li>
							<li>Day use beaches</li>
							<li>Bathrooms</li>
							<li>Showers</li>
							<li>Laundromat</li>
							<li>Storage</li>
						</ul>
					</Card.Body>
				</Card>
				<img src={GeneralStore} alt="Lost Lake Resort General Store" />
			</div>
		</div>
	);
}

export default Services;
