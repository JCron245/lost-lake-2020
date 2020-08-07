import React from 'react';
import './Rates.scss';
import { Card } from 'react-bootstrap';
import { Archive, BookOpen, Clock, Loader, Sun, ZapOff } from 'react-feather';

function Rates() {
	return (
		<div className="Rates">
			<h1>Rates</h1>
			<p>
				We have two different seasons with different rates for full RV Hook-Ups. Call us at&nbsp;
				<a href="tel:1-760-664-4413">(760) 664-4413</a> or visit our Contact page and reserve your spot today!
			</p>
			<div className="cards">
				<Card>
					<Card.Body>
						<h2 className="rate-heading">
							Summer Season <Sun className="rate-icon rate-icon-summer" aria-hidden="true" />
						</h2>
						<Card.Subtitle className="mb-2 text-muted">April 1st to September 30th</Card.Subtitle>
						<Card.Text>Full RV Hook-Up</Card.Text>
						<dl id="summerList" aria-labelledby="summerSub">
							<dt>Daily:</dt>
							<dd>$33.00</dd>
							<dt>Weekly:</dt>
							<dd>$180.00</dd>
							<dt>2 Weeks:</dt>
							<dd>$340.00</dd>
							<dt>Monthly:</dt>
							<dd>$650.00</dd>
						</dl>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<h2 className="rate-heading">
							Winter Season <Loader className="rate-icon rate-icon-winter" aria-hidden="true" />
						</h2>
						<Card.Subtitle className="mb-2 text-muted">October 1st to March 31st</Card.Subtitle>
						<Card.Text>Full RV Hook-Up</Card.Text>
						<dl id="winterList" aria-labelledby="winterSub">
							<dt>Daily:</dt>
							<dd>$33.00</dd>
							<dt>Weekly:</dt>
							<dd>$180.00</dd>
							<dt>Monthly:</dt>
							<dd>$280.00</dd>
						</dl>
					</Card.Body>
				</Card>
			</div>
			<div className="info">
				<h2 className="rate-heading">
					Check In Times <Clock className="rate-icon rate-icon-checkin" aria-hidden="true" />
				</h2>
				<dl aria-labelledby="checkInTitle">
					<dt>Check In Time:</dt>
					<dd>6:00pm</dd>
					<dt>Check Out Time:</dt>
					<dd>4:00pm</dd>
				</dl>
			</div>
			<div className="info">
				<h2 className="rate-heading">
					Storage
					<Archive className="rate-icon rate-icon-storage" aria-hidden="true" />
				</h2>
				<dl aria-labelledby="storageTitle">
					<dt>Monthly Storage:</dt>
					<dd>$45.00</dd>
				</dl>
			</div>
			<p className="rate-label">
				<BookOpen className="rate-icon rate-icon-reservation" aria-hidden="true" />
				<span className="rate-bold">Please note:</span>&nbsp;ALL reservations must be paid for in advance.
			</p>
			<p className="rate-label">
				<ZapOff className="rate-icon rate-icon-cancel" aria-hidden="true" />
				<span className="rate-bold">Cancellation Policy:</span>
				&nbsp;We require
				<em>&nbsp;at minimum a 2 week notice</em>
				&nbsp;prior to arrival in order to receive a refund minus a $10.00 processing fee.
			</p>
		</div>
	);
}

export default Rates;
