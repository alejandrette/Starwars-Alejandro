import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { BadgeX } from 'lucide-react';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const wishList = store.wishList;
	const [ elementWishList, setElementWishList ] = useState([]);
	const [ searchText, setSearchText ] = useState('');
	const [ suggestions, setSuggestions ] = useState([]);
	const navigate = useNavigate();

	const deleteWishList = name => {
		const newArray = wishList.filter(element => element != name);
		setElementWishList(newArray);
	};

	const handleSearch = e => {
		const text = e.target.value;
		setSearchText(text);

		if(text.length > 0){
			const results = [
				...store.Characters.map(item => ({...item, type: 'people'})),
				...store.Planets.map(item => ({...item, type: 'planets'})),
				...store.Species.map(item => ({...item, type: 'species'})),
				...store.Starships.map(item => ({...item, type: 'starships'})),
				...store.Vehicles.map(item => ({...item, type: 'vehicles'})),
			].filter(item => item.name.toLowerCase().includes(text.toLowerCase()));

			setSuggestions(results);
		} else {
			setSuggestions([]);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			const selectedItem = suggestions.find(
				item => item.name.toLowerCase() === searchText.toLocaleLowerCase()
			);

			if (selectedItem) {
				navigate(`/Information/${selectedItem.type}/${selectedItem.uid}`);
			} else {
				alert('Item not found');
			};
		}
	}

	useEffect(() => actions.sendWishList(elementWishList), [elementWishList]);

	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/" className="navbar-brand">
				<img 
					src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg" 
					alt="Star Wars Logo" 
					className="navbar-logo"
				/>
			</Link>
			<div className="input-container mx-3">
				<input 
					className="form-control search-input" 
					list="datalistOptions" 
					id="exampleDataList"
					value={searchText}
					onChange={handleSearch}	
					onKeyDown={handleKeyDown}
					placeholder="Search" 
				/>
				<datalist id="datalistOptions">
					{suggestions.map((item, index) => (
						<option key={index} value={item.name} />
					))}
				</datalist>
			</div>
			<div className="dropdown ml-auto dropstart">
				<button className="btn btn-warning dropdown-toggle wishlist-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Wish List <span className="badge">{wishList.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-dark wishlist-dropdown">
					{wishList.length > 0 ? 
						wishList.map((wish, index) => (
							<li key={index} className="dropdown-item wishlist-item d-flex justify-content-between align-items-center">
								<span>{wish}</span>
								<BadgeX 
									style={{color: 'red', cursor: 'pointer'}} 
									onClick={() => deleteWishList(wish)} 
								/>
							</li>
						)) : (
							<li className="dropdown-item text-muted">Empty wish list</li>
						)
					}
				</ul>
			</div>
		</nav>
	);
};
