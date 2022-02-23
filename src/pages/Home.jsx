import MealCard from "../components/cards/MealCard";

const Home = () => {
	return (
		<>
			<h1>Platillos</h1>
			<h2>Tenemos estos platillos para ti:</h2>

			<section>
				<h1>Los más:</h1>
				<p>Nutritivos</p>
				<MealCard />
				<p>Populares</p>
				<div className='card' style={{ width: "18rem" }}>
					<img src='...' className='card-img-top' alt='...' />
					<div className='card-body'>
						<h5 className='card-title'>Card title</h5>
						<p className='card-text'>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
						<a href='#' className='btn btn-primary'>
							Go somewhere
						</a>
					</div>
				</div>
				<p>Saludables</p>
				<div className='card' style={{ width: "18rem" }}>
					<img src='...' className='card-img-top' alt='...' />
					<div className='card-body'>
						<h5 className='card-title'>Card title</h5>
						<p className='card-text'>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
						<a href='#' className='btn btn-primary'>
							Go somewhere
						</a>
					</div>
				</div>
			</section>
			<section>
				<h1>Si quieres ver mas...</h1>
				<a href='/register'>Regístrate</a>
			</section>
		</>
	);
};

export default Home;
