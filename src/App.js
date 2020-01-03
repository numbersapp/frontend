import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import PageNotFound from './components/PageNotFound';

import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Property from './components/Property';
import RentalForm from './components/RentalForm';

import ComingSoon from './components/ComingSoon';

const App = () => {
	return (
		<>
			<Route path='/' component={Header}/>
			<Route exact path='/' component={Landing}/>
			<Route path='/signin' component={SignIn}/>
			<Route path='/signup' component={SignUp}/>
			
			<Route path='/pagenotfound' component={PageNotFound}/>
			
			<PrivateRoute path='/dashboard' component={Dashboard}/>
			<PrivateRoute path='/rental/:id' component={Property}/>
			<PrivateRoute exact path='/rental' component={RentalForm}/>
			
			<PrivateRoute path='/comingsoon' component={ComingSoon}/>
			
			<Route path='/' component={Footer}/>
		</>
	);
};

export default App;
