const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Films: [],
			Characters: [],
			Planets: [],
			Species: [],
			Starships: [],
			Vehicles: []
		},
		actions: {
			getFilms: () => {
				try {
					fetch('https://swapi.tech/api/films')
						.then(resp => resp.json())
						.then(data => setStore({Films: data.result}))
				} catch (error) {
					console.error(error);
				}
			},

			getCharacters: () => {
				try {
					fetch('https://swapi.tech/api/people')
						.then(resp => resp.json())
						.then(data => setStore({Characters: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			getPlanets: () => {
				try {
					fetch('https://swapi.tech/api/planets')
						.then(resp => resp.json())
						.then(data => setStore({Planets: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			getSpecies: () => {
				try {
					fetch('https://swapi.tech/api/species')
						.then(resp => resp.json())
						.then(data => setStore({Species: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			getStarships: () => {
				try {
					fetch('https://swapi.tech/api/starships')
						.then(resp => resp.json())
						.then(data => setStore({Starships: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			getVehicles: () => {
				try {
					fetch('https://swapi.tech/api/vehicles')
						.then(resp => resp.json())
						.then(data => setStore({Vehicles: data.results}))
				} catch (error) {
					console.error(error);
				}
			}
		}
	};
};

export default getState;
