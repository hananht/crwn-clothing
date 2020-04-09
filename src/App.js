import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';

import { setCurrentUser } from './redux/user/user.actions';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef =	await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				})
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
			  <Header />
			  <Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/login' component={LoginPage} />
			  </Switch>
			</div>
		  );
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => {
			return dispatch(setCurrentUser(user))
		}
	};
}

export default connect(null, mapDispatchToProps)(App);
