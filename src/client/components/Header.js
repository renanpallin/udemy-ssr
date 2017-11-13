import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Header = ({ auth }) => (
	<div>
		<Link to="/">React SSR</Link>
		<h2>{JSON.stringify(auth)}</h2>
	</div>
);

export default connect(({ auth }) => ({ auth }))(Header);
