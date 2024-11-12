import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/" className="navbar-brand">
				<img 
					src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg' 
					alt="Star Wars Logo" 
					className="navbar-logo" 
				/>
			</Link>
			<div className="dropdown ml-auto">
				<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown button
				</button>
				<ul className="dropdown-menu dropdown-menu-dark">
					<li>Lista de deseados</li>
				</ul>
				</div>
		</nav>
	);
};
