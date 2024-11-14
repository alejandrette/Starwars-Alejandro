import React, { useContext, useEffect, useState } from "react";
import "../../../styles/AllCharacters.css";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const AllSpecies = () => {
    const { store, actions } = useContext(Context);
    const species = store.Species;
    const [ activePage, setActivePage ] = useState(1);

    useEffect(() => {
        actions.getSpecies();
    }, []);

    return (
        <div>
            <div className="header-area">
                <h2 className="main-heading">Species</h2>
            </div>
            <div className="grid-container">
                {species.map(specie => (
                    <div key={specie.uid} className="character-card">
                        <img src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`} alt={specie.name} />
                        <div className="card-body">
                            <h2 className="character-name">{specie.name}</h2>
                            <Link to={`/Information/species/${specie.uid}`} className="more-info-btn">
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
                                onClick={() => {actions.getSpecies(queryPage); setActivePage(numberPage)}}>
                                <span className="page-num">{numberPage}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
};
