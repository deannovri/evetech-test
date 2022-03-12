import React from "react";
import { Link } from "react-router-dom";
import Next from "../assets/images/login/btnNext.png";

function Login() {
	return (
		<div className="login-container">
			<div className="login-board">
				<input type="text" placeholder="ENTER YOUR NAME" />
				<input
					className="input-separator"
					type="text"
					placeholder="ENTER YOUR CLASS"
				/>
				<Link to={"/comic"}>
					<img className="next-btn" src={Next} alt="nextbutton" />
				</Link>
			</div>
			<div className="lanscape-warning">
				<h1>Please rotate your device</h1>
			</div>
		</div>
	);
}

export default Login;
