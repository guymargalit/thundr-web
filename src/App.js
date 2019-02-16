import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import twitter from './twitter.svg';
import twitter_over from './twitter0.svg';
import patreon from './patreon.svg';
import patreon_over from './patreon_over.svg';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-container">
						<div className="App-title">
							<img src={logo} alt="logo" className="App-logo no-select" />
							<h1 className="no-select">Thundr</h1>
						</div>
					</div>
				</header>
				<div className="App-body">
					<div className="App-headline no-select">Visualize your music.</div>
					<div className="App-subtitle no-select">Use LIFX Wi-Fi LED lights with Spotify.</div>
					<div className="App-button no-select">Coming soon</div>
					<div className="App-social">
						<a href="https://twitter.com/guymargalit">
							<img
								onMouseOver={e => (e.currentTarget.src = twitter_over)}
								onMouseLeave={e => (e.currentTarget.src = twitter)}
								className="Social-image no-select"
								src={twitter}
								alt="Twitter"
							/>
						</a>

						<a href="https://www.patreon.com/bePatron?u=16401129">
							<img
								onMouseOver={e => (e.currentTarget.src = patreon_over)}
								onMouseLeave={e => (e.currentTarget.src = patreon)}
								className="Social-image no-select"
								// style={{ width: '25px', height: '25px' }}
								src={patreon}
								alt="Patreon"
							/>
						</a>
					</div>
				</div>
				{/* <div className="App-footer">
					<a href="https://twitter.com/guymargalit">
						<img
							onMouseOver={e => (e.currentTarget.src = twitter_over)}
							onMouseLeave={e => (e.currentTarget.src = twitter)}
							className="Social-image no-select"
							src={twitter}
							alt="Twitter"
						/>
					</a>
				</div> */}
			</div>
		);
	}
}

export default App;
