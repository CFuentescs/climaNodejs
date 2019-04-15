const axios = require('axios');

const getClima =  async( lat, lng ) => {

	

	const instance = axios.create({
	  baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d703b5e6c474dff6706a285f2323c648&units=metric`
	});
	console.log(`api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d703b5e6c474dff6706a285f2323c648&units=metric`);
	const resp = await instance.get();

	
	return resp.data.main.temp;
	
}

module.exports = {
	getClima
}