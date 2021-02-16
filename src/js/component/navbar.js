import React from "react";
import { Link } from "react-router-dom";
import logoStarWars from "../../img/logoStarWars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-1">
			<Link to="/">
				<span className="navbar-brand mb-0 ml-5 h1">
					<img className="LOGO  bg-light" src={logoStarWars} alt="MORA" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/single">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
