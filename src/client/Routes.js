import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

const exact = true;
export default [{
	...App,
	routes: [{
		...HomePage,
		path: '/',
		exact,
	}, {
		...UsersListPage,
		path: '/users',
	}, {
		...AdminsListPage,
		path: '/admins',
	}, {
		...NotFoundPage,
	}],
}];
