import React from "react";
import MapPhoto from "../../assets/map.png";

function Map() {
	return (
		<div className="Map">
			<h1>Campground Map</h1>
			<p>
				Call us at <a href="tel:1-760-664-4413">(760) 664-4413</a> or visit our
				Contact page and reserve your spot today!
			</p>
			<img
				src={MapPhoto}
				style={{ width: "100%" }}
				alt="Map of campground spots at Lost Lake Resort"
			/>
		</div>
	);
}

export default Map;
