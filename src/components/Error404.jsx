import React from 'react';

const Error404 = ({ mensaje }) => {
	return (
		<div>
			<h3 className='alert alert-danger text-center p-2'>
				{mensaje} no se encontro
			</h3>
		</div>
	);
};

export default Error404;
