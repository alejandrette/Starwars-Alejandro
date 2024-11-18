import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Fullscreen, Heart, HeartOff } from 'lucide-react';

export const Home = () => {
	const { store, actions } = useContext(Context);
	const films = store.Films;
	const characters = store.Characters;
	const planets = store.Planets;
	const species = store.Species;
	const starships = store.Starships;
	const vehicles = store.Vehicles;
	const { wishList } = store;

	useEffect(() => {
	 	actions.getFilms();
	 	actions.getCharacters();
	 	actions.getPlanets();
	 	actions.getSpecies();
	 	actions.getStarships();
	 	actions.getVehicles();
	}, []);

	return (
		<div className="films-section">
			<h2 className="section-title">Films</h2>
			<div className="card-container mb-5">
				{films.map(film => (
					<div key={film.uid} className="card">
						<img src={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`} alt={film.title} />
						<div className="card-content">
							<h2 className="card-title">{film.properties.title}</h2>
							<div className="card-description text-light">
								<p>Producer: {film.properties.producer}</p>
								<p>Director: {film.properties.director}</p>
							</div>
							<Link to={`/Information/films/${film.uid}`} className="card-button">
								Learn More
							</Link>
							<div className="wishlist-icon">
								{wishList.includes(film.properties.title) ? 
									<HeartOff onClick={() => actions.deleteWishList(film.properties.title)} /> : 
									<Heart onClick={() => actions.addWishList(film.properties.title)} />
								}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="header-section">
				<h2 className="section-title">Characters</h2>
				<Link to="/AllCharacters" className="fullscreen-link me-5">
					<Fullscreen size={48} />
				</Link>
			</div>
			<div className="card-container">
				{characters.map(character => (
					<div key={character.uid} className="card">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} alt={character.name} />
						<div className="card-content">
							<h2 className="card-title">{character.name}</h2>
							<Link to={`/Information/people/${character.uid}`} className="card-button">
								Learn More
							</Link>
							<div className="wishlist-icon">
								{wishList.includes(character.name) ? 
									<HeartOff onClick={() => actions.deleteWishList(character.name)} /> : 
									<Heart onClick={() => actions.addWishList(character.name)} />
								}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="header-section">
				<h2 className="section-title">Planets</h2>
				<Link to="/AllPlanets" className="fullscreen-link me-5">
					<Fullscreen size={48} />
				</Link>
			</div>
			<div className="card-container">
				{planets.map(planet => (
					<div key={planet.uid} className="card">
						<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.name} />
						<div className="card-content">
							<h2 className="card-title">{planet.name}</h2>
							<Link to={`/Information/planets/${planet.uid}`} className="card-button">
								Learn More
							</Link>
							<div className="wishlist-icon">
								{wishList.includes(planet.name) ? 
									<HeartOff onClick={() => actions.deleteWishList(planet.name)} /> : 
									<Heart onClick={() => actions.addWishList(planet.name)} />
								}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="header-section">
				<h2 className="section-title">Species</h2>
				<Link to="/AllSpecies" className="fullscreen-link me-5">
					<Fullscreen size={48} />
				</Link>
			</div>
			<div className="card-container">
				{species.map(specie => (
					<div key={specie.uid} className="card">
						<img src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`} alt={specie.name} />
						<div className="card-content">
							<h2 className="card-title">{specie.name}</h2>
							<Link to={`/Information/species/${specie.uid}`} className="card-button">
								Learn More
							</Link>
							<div className="wishlist-icon">
								{wishList.includes(specie.name) ? 
									<HeartOff onClick={() => actions.deleteWishList(specie.name)} /> : 
									<Heart onClick={() => actions.addWishList(specie.name)} />
								}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="header-section">
				<h2 className="section-title">Starships</h2>
				<Link to="/AllStarships" className="fullscreen-link me-5">
					<Fullscreen size={48} />
				</Link>
			</div>
			<div className="card-container">
				{starships.map(starship => (
					<div key={starship.uid} className="card">
						<img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} alt={starship.name} />
						<div className="card-content">
							<h2 className="card-title">{starship.name}</h2>
							<Link to={`/Information/starships/${starship.uid}`} className="card-button">
								Learn More
							</Link>
							<div className="wishlist-icon">
								{wishList.includes(starship.name) ? 
									<HeartOff onClick={() => actions.deleteWishList(starship.name)} /> : 
									<Heart onClick={() => actions.addWishList(starship.name)} />
								}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="header-section">
				<h2 className="section-title">Vehicles</h2>
				<Link to="/AllVehicles" className="fullscreen-link me-5">
					<Fullscreen size={48} />
				</Link>
			</div>
			<div className="card-container">
				{vehicles.map(vehicle => (
					<div key={vehicle.uid} className="card">
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.name} />
						<div className="card-content">
							<h2 className="card-title">{vehicle.name}</h2>
							<Link to={`/Information/vehicles/${vehicle.uid}`} className="card-button">
								Learn More
							</Link>
							<div className="wishlist-icon">
								{wishList.includes(vehicle.name) ? 
									<HeartOff onClick={() => actions.deleteWishList(vehicle.name)} /> : 
									<Heart onClick={() => actions.addWishList(vehicle.name)} />
								}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
