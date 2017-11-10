import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

const exact = true;
export default [
	{
		path: '/',
		component: HomePage,
		exact,
	},
	{
		loadData,
		path: '/users',
		component: UsersListPage,
	},
];
