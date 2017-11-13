import React from 'react';

const Home = () => {
	return (
		<div>
			<h3 className="center-align">Welcome</h3>
			<p>Check out these awesome features</p>
			<div>I'm the home component!</div>
			<button onClick={e => console.log('apertou!')}>Press me!</button>
		</div>
	);
};

export default { component: Home };
