const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className=''>
			<div>
				<p>Aspirante: </p>
				<span>Adrián Curiel</span>
			</div>
			<div>
				<p>Alkemy Challenge: </p>
				<span>Frontend</span>
			</div>
			<div>
				<p>Mes: </p>
				<span>Marzo</span>
			</div>
			<section>Todos los derechos reservados &copy; {year}</section>
		</footer>
	);
};

export default Footer;
