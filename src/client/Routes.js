import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

const exact = true;
export default [
	{
		path: '/',
		component: Home,
		exact,
	},
	{
		loadData,
		path: '/users',
		component: UsersList,
	},
];
