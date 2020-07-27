import React from "react";
import SlideOne from "../../assets/slider1.jpg";
import SlideTwo from "../../assets/slider2.jpg";
import SlideThree from "../../assets/slider3.jpg";
import SlideFour from "../../assets/slider4.jpg";
import { Carousel } from "react-responsive-carousel";

function Home() {
	return (
		<div className="home">
			<h1 id="pageTitle">Lost Lake Resort</h1>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				transitionTime={850}
				interval={6000}
			>
				<img className="d-block w-100" src={SlideOne} alt="First slide" />
				<img className="d-block w-100" src={SlideTwo} alt="Second slide" />
				<img className="d-block w-100" src={SlideThree} alt="Third slide" />
				<img className="d-block w-100" src={SlideFour} alt="Fourth slide" />
			</Carousel>
			<p>
				A river front community and vacation resort on the Colorado River
				located just 31 miles north of Blythe CA on Hwy 95. Lost Lake River
				Resort is a popular destination for all water sport recreation.
				Everything from boating, wake boarding, and jet skiing, to fishing and
				tubing.
			</p>
			<p>
				Lost Lake Resort is a place where family and friends meet for year round
				fun. Our Resort is equipped with full RV hook ups as well as spots for
				tent camping. We also have clean restrooms with hot showers conveniently
				located throughout the park. Lost Lake also has its own general store
				providing everything you need to have a great time!
			</p>
			<p>
				Vacationers will find our boat launching ramp is easily accessible,
				allowing for more time to play and relax in the water. Plan on bringing
				your rafts, floats, coolers, and chairs to our day use area where you
				can spend a day soaking in the sun and relaxing to your fullest extent.
				After a long day of fun in the sun you can enjoy sitting around a
				camp-fire gazing at the millions of stars in our beautiful and clear
				California skies.
			</p>
			<p>
				We have great weather all year long. Our summers are sunny and hot, and
				the winter daily temperatures are on average of 70 °F. Flocks of
				snow-birds soar in year after year during the winter to meet up with
				their friends from across the country at our resort.
			</p>
			<p>
				Make a reservation today and find out why Lost Lake Resort is the
				greatest place under the sun!
			</p>
		</div>
	);
}

export default Home;
