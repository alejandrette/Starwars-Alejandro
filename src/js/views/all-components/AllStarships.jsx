import React, { useContext, useEffect, useState } from "react";
import "../../../styles/AllCharacters.css";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const AllStarships = () => {
    const { store, actions } = useContext(Context);
    const starships = store.Starships;
    const [ activePage, setActivePage ] = useState(1);

    useEffect(() => {
        actions.getStarships();
    }, []);

    return (
        <div>
            <div className="header-area">
                <h2 className="main-heading">Starships</h2>
            </div>
            <div className="grid-container">
                {starships.map(starship => (
                    <div key={starship.uid} className="character-card">
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} alt={starship.name} />
                        <div className="card-body">
                            <h2 className="character-name">{starship.name}</h2>
                            <Link to={`/Information/starships/${starship.uid}`} className="more-info-btn">
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
                                onClick={() => {actions.getStarships(queryPage); setActivePage(numberPage)}}>
                                <span className="page-num">{numberPage}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
};
