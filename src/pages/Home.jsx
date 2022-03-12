import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Start from "../assets/images/home/btnStart.png";
import lottie from "lottie-web";

function Home() {
	const container = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../assets/animation/firewood.json"),
		});
	}, []);

	return (
		<div className="home-container">
			<div className="btn-anim">
				<div className="start-btn">
					<Link to={"/login"}>
						<img src={Start} alt="start" />
					</Link>
				</div>
				<div ref={container} className="fire-container"></div>
			</div>
			<div className="lanscape-warning">
				<h1>Please rotate your device</h1>
			</div>
		</div>
	);
}

export default Home;
