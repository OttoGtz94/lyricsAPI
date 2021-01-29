import React, { Fragment } from 'react';
import Error404 from './Error404';

const Cancion = ({ letra }) => {
	// if (letra.length === 0) return null;
	return (
		<Fragment>
			{letra === '' ? (
				<Error404 mensaje='La letra ' />
			) : (
				<Fragment>
					<h2>Letra canción</h2>
					<p className='letra'>{letra}</p>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Cancion;
