import axios from 'axios';
const API = 'https://react-ssr-api.herokuapp.com/';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async dispatch => {
	const res = await axios.get(API + 'users'); // + /xss to test
	dispatch({
		type: FETCH_USERS,
		payload: res,
	});
};
