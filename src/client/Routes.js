import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFountPage from './pages/NotFoundPage';

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
		...NotFountPage,
	}],
}];
