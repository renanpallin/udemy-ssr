import React from 'react';

const Home = () => {
	return (
		<div>
			<div>I'm the home component!</div>
			<button onClick={e => console.log('apertou!')}>Press me!</button>
		</div>
	);
};

export default Home;
