import React from 'react';
import Home from './components/Home';
import UsersList from './components/UsersList';

const exact = true;
export default [
	{
		path: '/',
		component: Home,
		exact,
	},
	{
		path: '/users',
		component: UsersList,
	},
];
