import React from 'react';
import Error404 from './Error404';

const Infor = ({ informacion }) => {
	if (informacion === null)
		return <Error404 mensaje='Ese artista ' />;
	const {
		strArtist,
		intFormedYear,
		strStyle,
		strGenre,
		strBiographyES,
		strArtistLogo,
		strArtistThumb,
		strFacebook,
		strTwitter,
		strLastFMChart,
	} = informacion;
	// console.log(informacion.length);
	return (
		<div className='card border-light'>
			<div className='card-header bg-primary text-light font-weight-bold'>
				Información Artista
			</div>
			<div className='card-body'>
				<img src={strArtistLogo} alt={strArtist} />
				<p className='card-text'>
					Género: {strGenre}/{strStyle}
				</p>
				<p className='card-text'>
					Principios: {intFormedYear}
				</p>
				<h2 className='card-text'>{strArtist}</h2>
				<p className='card-text'>{strBiographyES}</p>
				<img src={strArtistThumb} alt={strArtist} />
				<p className='card-text'>
					<a
						href={`https://${strFacebook}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-facebook'></i>
					</a>
					<a
						href={`https://${strTwitter}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href={`${strLastFMChart}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-lastfm'></i>
					</a>
				</p>
			</div>
		</div>
	);
};

export default Infor;
