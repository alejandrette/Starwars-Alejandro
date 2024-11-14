import React, { useContext, useEffect, useState } from "react";
import "../../../styles/AllCharacters.css";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const AllVehicles = () => {
    const { store, actions } = useContext(Context);
    const vehicles = store.Vehicles;
    const [ activePage, setActivePage ] = useState(1);

    useEffect(() => {
        actions.getVehicles();
    }, []);

    return (
        <div>
            <div className="header-area">
                <h2 className="main-heading">Vehicles</h2>
            </div>
            <div className="grid-container">
                {vehicles.map(vehicle => (
                    <div key={vehicle.uid} className="character-card">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.name} />
                        <div className="card-body">
                            <h2 className="character-name">{vehicle.name}</h2>
                            <Link to={`/Information/vehicles/${vehicle.uid}`} className="more-info-btn">
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <nav>
                <ul className="pagination-controls">
                    {[...Array(4)].map((_,index) => {
                        const numberPage = index + 1;
                        const queryPage = `?page=${numberPage}&limit=10`;
                        return(
                            <li key={index} className={`pagination-item ${activePage === numberPage ? 'active' : ''}`}
                                onClick={() => {actions.getVehicles(queryPage); setActivePage(numberPage)}}>
                                <span className="page-num">{numberPage}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
};
