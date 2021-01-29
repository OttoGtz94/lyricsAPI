import React, {
	Fragment,
	useState,
	useEffect,
} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';

function App() {
	const [busquedaletra, guardarBusquedaLetra] = useState(
		{}
	);
	const [letra, guardarLetra] = useState('');
	const [informacion, guardarInformacion] = useState([]);
	const [buscado, guardarBuscado] = useState(false);

	useEffect(() => {
		if (Object.keys(busquedaletra).length === 0) return;

		const consultarApiLetra = async () => {
			const { artista, cancion } = busquedaletra;
			const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
			const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

			const [letra, informacion] = await Promise.all([
				axios.get(url),
				axios.get(url2),
			]);

			// const resultado = await axios.get(url);

			guardarLetra(letra.data.lyrics);
			if (informacion.data.artists === null) {
				guardarInformacion(informacion.data.artists);
			} else {
				guardarInformacion(informacion.data.artists[0]);
			}
			guardarBuscado(true);
			// guardarLetra(resultado.data.lyrics);
		};

		consultarApiLetra();
	}, [busquedaletra, informacion]);

	return (
		<Fragment>
			<Formulario
				guardarBusquedaLetra={guardarBusquedaLetra}
			/>
			<div className='container mt-5'>
				<div className='row'>
					<div className='col-md-6'>
						{buscado ? (
							<Info informacion={informacion} />
						) : null}
					</div>
					<div className='col-md-6'>
						{buscado ? <Cancion letra={letra} /> : null}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
