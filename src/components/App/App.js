import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink as Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Home from '../Home';
import Help from '../Help';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="Home-header">
					<div className="Home-container">
						<Link to="/">
							<div className="Home-title">
								<img src={logo} alt="logo" className="Home-logo no-select" />
								<h1 className="no-select">Thundr</h1>
							</div>
						</Link>
						<Link to="/help">
							<div className="Home-help no-select">Help</div>
						</Link>
					</div>
				</div>
				<Route exact path="/" component={Home} />
				<Route path="/help" component={Help} />
			</Router>
		);
	}
}

export default App;
