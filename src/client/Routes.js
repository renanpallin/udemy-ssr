import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

const exact = true;
export default [
	{
		...HomePage,
		path: '/',
		exact,
	},
	{
		...UsersListPage,
		path: '/users',
	},
];
