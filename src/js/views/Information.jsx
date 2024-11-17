import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Information.css";

export const Information = () => {
	const params = useParams();
	const component = params.thecomponent;
	const id = params.theid;
	const [ result, setResult ] = useState([]);

	const getInformation = () => {
		fetch(`https://www.swapi.tech/api/${component}/${id}`)
			.then(resp => resp.json())
			.then(data => setResult(data.result.properties))
	}

	useEffect(() => getInformation(), []);

  const renderDisplay = () => {
    switch (component) {
      case 'films':
        return(
          <>
            <p><strong>Producer:</strong> {result.producer}</p>
            <p><strong>Director:</strong> {result.director} kg</p>
            <p><strong>Release Date:</strong> {result.release_date}</p>
            <p><strong>Description:</strong> {result.opening_crawl}</p>
          </>
        )
      case 'people':
        return(
          <>
            <p><strong>Height:</strong> {result.height} cm</p>
            <p><strong>Mass:</strong> {result.mass} kg</p>
            <p><strong>Hair Color:</strong> {result.hair_color}</p>
            <p><strong>Skin Color:</strong> {result.skin_color}</p>
            <p><strong>Eye Color:</strong> {result.eye_color}</p>
            <p><strong>Birth Year:</strong> {result.birth_year}</p>
            <p><strong>Gender:</strong> {result.gender}</p>
          </>
        )
      case 'planets':
        return(
        <>
          <p><strong>Diameter:</strong> {result.diameter} km</p>
          <p><strong>Rotation Period:</strong> {result.rotation_period}</p>
          <p><strong>Orbital Period:</strong> {result.orbital_period}</p>
          <p><strong>Gravity:</strong> {result.gravity}</p>
          <p><strong>Population:</strong> {result.population}</p>
          <p><strong>Climate:</strong> {result.climate}</p>
          <p><strong>Terrain:</strong> {result.terrain}</p>
        </>
      )
      case 'species':
      return(
        <>
          <p><strong>Classification:</strong> {result.classification}</p>
          <p><strong>Designation:</strong> {result.designation}</p>
          <p><strong>Average Height:</strong> {result.average_height}</p>
          <p><strong>Average Lifespan:</strong> {result.average_lifespan}</p>
          <p><strong>Hair Colors:</strong> {result.hair_colors}</p>
          <p><strong>Skin Colors:</strong> {result.skin_colors}</p>
          <p><strong>Eye Colors:</strong> {result.eye_colors}</p>
          <p><strong>Language:</strong> {result.language}</p>
        </>
      )
      case 'starships':
      return(
        <>
          <p><strong>Model:</strong> {result.model}</p>
          <p><strong>Starship Class:</strong> {result.starship_class}</p>
          <p><strong>Manufacturer:</strong> {result.manufacturer}</p>
          <p><strong>Cost:</strong> {result.cost_in_credits} credits</p>
          <p><strong>Passengers:</strong> {result.passengers}</p>
          <p><strong>Cargo Capacity:</strong> {result.cargo_capacity}</p>
          <p><strong>Consumables:</strong> {result.consumables}</p>
        </>
      )
      case 'vehicles':
      return(
        <>
          <p><strong>Model:</strong> {result.model}</p>
          <p><strong>Vehicle Class:</strong> {result.vehicle_class}</p>
          <p><strong>;anufacturer:</strong> {result.manufacturer}</p>
          <p><strong>Cost:</strong> {result.cost_in_credits} credits</p>
          <p><strong>Passengers:</strong> {result.passengers}</p>
          <p><strong>Cargo Capacity:</strong> {result.cargo_capacity}</p>
        </>
      )
      default:
        text = "No value found";
    }
  }

	return (
		<div className="character-page">
      <header className="character-header">
        <h1 className="character-name">{result.name || result.title}</h1>
      </header>
      <main className="character-content">
        <div className="character-image-container">
          <img
            src={`https://starwars-visualguide.com/assets/img/${component === 'people' ? 'characters' : component}/${id}.jpg`} 
            alt={id}
            className="character-image"
          />
        </div>
        <div className="character-details">
          <h2>Details</h2>
          {renderDisplay()}
        </div>
      </main>
    </div>
	);
};