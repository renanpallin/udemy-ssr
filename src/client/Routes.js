import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

const exact = true;
export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact,
			},
			{
				...UsersListPage,
				path: '/users',
			},
		],
	},
];
