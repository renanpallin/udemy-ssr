import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
	/*
	Why this works when I return the class instead of the result of connect()?
	 */
	class RequireAuth extends React.Component {
		render() {
			switch (this.props.auth) {
				case false:
					return <Redirect to="/" />;
				case null:
					return <div>loading...</div>;
				default:
					return <ChildComponent {...this.props} />;
			}
		}
	}

	function mapStateToProps({ auth }) {
		return { auth };
	}

	return connect(mapStateToProps	)(RequireAuth);
};
