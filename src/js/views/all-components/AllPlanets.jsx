import React, { useContext, useEffect, useState } from "react";
import "../../../styles/AllCharacters.css";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { Heart, HeartOff } from 'lucide-react';

export const AllPlanets = () => {
    const { store, actions } = useContext(Context);
    const planets = store.Planets;
    const [ activePage, setActivePage ] = useState(1);
	const { wishList } = store;

    useEffect(() => {
        actions.getPlanets();
    }, []);

    return (
        <div>
            <div className="header-area">
                <h2 className="main-heading">Planets</h2>
            </div>
            <div className="grid-container">
                {planets.map(planet => (
                    <div key={planet.uid} className="character-card">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt={planet.name} />
                        <div className="card-body">
                            <h2 className="character-name">{planet.name}</h2>
                            <Link to={`/Information/planets/${planet.uid}`} className="more-info-btn">
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

            <nav>
                <ul className="pagination-controls">
                    {[...Array(6)].map((_,index) => {
                        const numberPage = index + 1;
                        const queryPage = `?page=${numberPage}&limit=10`;
                        return(
                            <li key={index} className={`pagination-item ${activePage === numberPage ? 'active' : ''}`}
                                onClick={() => {actions.getPlanets(queryPage); setActivePage(numberPage)}}>
                                <span className="page-num">{numberPage}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
};
