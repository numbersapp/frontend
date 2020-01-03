import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import PropertyInfo from './components/createform/PropertyInfo';
import Purchase from './components/createform/Purchase';

const App = () => {
	return (
		<>
			<Route path='/' component={Header}/>
			<Route exact path='/' component={Landing}/>
			<Route path='/signin' component={SignIn}/>
			<Route path='/signup' component={SignUp}/>
			
			<PrivateRoute path='/dashboard' component={Dashboard}/>
			<PrivateRoute path='/create/propertyinfo' component={PropertyInfo}/>
			<PrivateRoute path='/create/purchase' component={Purchase}/>
			
			<Route path='/' component={Footer}/>
		</>
	);
};

export default App;
