import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Route exact path='/' component={Header}/>
			<Route exact path='/' component={Landing}/>
			<Route path='/signin' component={SignIn}/>
			<Route path='/signup' component={SignUp}/>
			<Route path='/' component={Footer}/>
		</>
	);
};

export default App;
