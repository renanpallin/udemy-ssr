import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>;
		});
	}

	head() {
		return (
			<Helmet>
				<title>{`${this.props.users.length} users loaded`}</title>
				<meta property="og:title" content="users app og" />
			</Helmet>
		);
	}

	render() {
		return (
			<div>
				{this.head()}
				Here's a big list of users:
				<ul>{this.renderUsers()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export { loadData };

export default {
	component: connect(mapStateToProps, { fetchUsers })(UsersList),
	loadData,
};
