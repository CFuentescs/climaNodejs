const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'direccion de la ciudad para obtener el clima',
		demand: true
	}
}).argv;
lugar.getLugarLatLng(argv.direccion)
	.then(resp => {
		clima.getClima(resp.lat, resp.lng )
			.then(console.log)
			.catch(console.log)
	})
	.catch(console.log);

//console.log(argv.direccion);

