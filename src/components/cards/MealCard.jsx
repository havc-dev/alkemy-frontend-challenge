import React from "react";

const MealCard = ({ title, imgSrc, sourceName, link }) => {
	return (
		<>
			<div className='card' style={{ width: "18rem" }}>
				<img src={imgSrc} className='card-img-top' alt={`${title}, una receta de ${sourceName}`} />
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>Aquí irán badges</p>
					<a href={link} className='btn btn-primary'>
						Ver receta completa...
					</a>
				</div>
			</div>
		</>
	);
};

export default MealCard;
