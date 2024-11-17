import React, { useContext, useEffect, useState } from "react";
import "../../../styles/AllCharacters.css";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { Fullscreen, Heart, HeartOff } from 'lucide-react';

export const AllCharacters = () => {
    const { store, actions } = useContext(Context);
    const characters = store.Characters;
    const [ activePage, setActivePage ] = useState(1);
	const [ wishList, setWishList ] = useState([]);

    useEffect(() => {
        actions.getCharacters();
    }, []);

    const addWishList = name => {
		setWishList(prev => prev.concat(name));
	};

	const deleteWishList = name => {
		const newArray = wishList.filter(element => element != name);
		setWishList(newArray);
	}

	useEffect(() => actions.sendWishList(wishList), [wishList]);

    return (
        <div>
            <div className="header-area">
                <h2 className="main-heading">Characters</h2>
            </div>
            <div className="grid-container">
                {characters.map(character => (
                    <div key={character.uid} className="character-card">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} alt={character.name} />
                        <div className="card-body">
                            <h2 className="character-name">{character.name}</h2>
                            <Link to={`/Information/people/${character.uid}`} className="more-info-btn">
                                Learn More
                            </Link>
                            <div className="wishlist-icon">
								{wishList.includes(character.name) ? 
									<HeartOff onClick={() => deleteWishList(character.name)} /> : 
									<Heart onClick={() => addWishList(character.name)} />
								}
							</div>
                        </div>
                    </div>
                ))}
            </div>

            <nav>
                <ul className="pagination-controls">
                    {[...Array(9)].map((_,index) => {
                        const numberPage = index + 1;
                        const queryPage = `?page=${numberPage}&limit=10`;
                        return(
                            <li key={index} className={`pagination-item ${activePage === numberPage ? 'active' : ''}`}
                                onClick={() => {actions.getCharacters(queryPage); setActivePage(numberPage)}}>
                                <span className="page-num">{numberPage}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
};
