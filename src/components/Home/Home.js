import React, { Component } from 'react';
import './Home.css';
import twitter from '../../assets/twitter.svg';
import twitter_over from '../../assets/twitter0.svg';
import screenshot from '../../assets/screenshot.png';
import { osName } from 'react-device-detect';
import TweetEmbed from 'react-tweet-embed';
import { Tweet } from 'react-twitter-widgets';

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="Home-body">
					<div className="Home-headline no-select">Visualize your music.</div>
					<div className="Home-subtitle no-select">Use LIFX Wi-Fi LED lights with Spotify.</div>
					<div className="Home-download">Be aware, the application is still in beta and may be unstable.</div>
					{osName.includes('Windows') ? (
						<div>
							<a href="https://firebasestorage.googleapis.com/v0/b/thundr-de04a.appspot.com/o/Thundr%20Setup%200.1.0.exe?alt=media&token=81522447-6315-48f8-8b56-0bdc97be0004">
								<div className="Home-button no-select">Download Beta for Windows</div>
							</a>
							<div className="Home-download">
								Download for{' '}
								<a
									class="Home-hyper"
									href="https://firebasestorage.googleapis.com/v0/b/thundr-de04a.appspot.com/o/Thundr-0.1.0.dmg?alt=media&token=259f568b-9549-4116-ba6c-c4f78a0f26b4"
								>
									macOS
								</a>
							</div>
						</div>
					) : (
						<div>
							<a href="https://firebasestorage.googleapis.com/v0/b/thundr-de04a.appspot.com/o/Thundr-0.1.0.dmg?alt=media&token=259f568b-9549-4116-ba6c-c4f78a0f26b4">
								<div className="Home-button no-select">Download Beta for macOS</div>
							</a>
							<div className="Home-download">
								Download for{' '}
								<a
									class="Home-hyper"
									href="https://firebasestorage.googleapis.com/v0/b/thundr-de04a.appspot.com/o/Thundr%20Setup%200.1.0.exe?alt=media&token=81522447-6315-48f8-8b56-0bdc97be0004"
								>
									Windows
								</a>
							</div>
						</div>
					)}
					<div className="Home-social">
						<a href="https://twitter.com/guymargalit">
							<img
								onMouseOver={e => (e.currentTarget.src = twitter_over)}
								onMouseLeave={e => (e.currentTarget.src = twitter)}
								className="Social-image no-select"
								src={twitter}
								alt="Twitter"
							/>
						</a>
					</div>
					<div className="Home-screenshot">
						<Tweet tweetId="1112925334242881538" options={{ width: '90%', align: 'center' }} />
						{/* <img src={screenshot} alt="Thundr" className="Home-screenshot no-select" /> */}
					</div>
				</div>
			</div>
		);
	}
}
