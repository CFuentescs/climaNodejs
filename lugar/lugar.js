const axios = require('axios');

const getLugarLatLng =  async( direc ) => {

	const ecodeUlr = encodeURI(direc);

	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ecodeUlr}`,
	  headers: {'X-RapidAPI-Key': '1f330bd756msh9e3229ab1f1c5fbp158930jsndf7960d981b4'}
	});

	const resp = await instance.get();

	if ( resp.data.Results.length === 0 ){
		throw new Error(`No hay resultados para ${ direc }`);
	}
	const data      = resp.data.Results[0];
	const direccion = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return {
		direccion,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
}