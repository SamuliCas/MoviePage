import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	return (
		<div className="movie-grid">
			{props.movies.map((movie, index) => (
				<div className="image-container" key={index}>
					<img src={movie.Poster} alt='movie'></img>
					<div onClick={() => props.handleFavouritesClick(movie)} className='overlay'>
					<FavouriteComponent />
					</div>
				</div>
			))}
    	</div>
	);
};

export default MovieList;