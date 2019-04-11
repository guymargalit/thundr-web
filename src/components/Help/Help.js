import React, { Component } from 'react';
import './Help.css';

export default class Help extends Component {
	render() {
		return (
			<div className="Help">
				<div className="Help-container">
					<div className="Help-title">How to use Thundr</div>
					<div className="Help-desc">
						Download the application for either macOS or Windows. After opening the application, you will
						have to login to your Spotify account by clicking the "Get Started" button.{' '}
					</div>
					<div className="Help-desc">
						Once you are logged in, the right pane will begin to search for existing LIFX LED Wi-Fi lights
						connected to your network. If none are found, a refresh button will appear to search again.
					</div>
					<div className="Help-desc">
						You can then drag any of the lights into one of the four boxes in the main panel. Multiple
						lights can be placed in a box and when the light show begins, lights grouped in the same box
						will behave the same.
					</div>
					<div className="Help-desc">
						After you've dragged the lights you want to use, you can decide which effects you want active by
						selecting or deselecting the effects in the effects bar. Note that these effects will change
						based on the section in the song (chorus, verse, bridge, etc.)
					</div>
					<div className="Help-desc">
						To start viewing the light show, begin playing a song on Spotify. You may notice that the song
						will start playing and jump back a bit. This is because Thundr has to sync with the current
						song. However, once synced, there won't be any variations in the song. Note that this will only
						occur when manually playing a song. If the song naturally progresses at the end, no noticeable
						jump in the audio should occur.
					</div>
					<div className="Help-desc">
						On the left pane, there is also the option to plug in a MIDI keyboard and change the lights
						manually.
					</div>
					<div className="Help-title">Troubleshooting</div>
					<div className="Help-title">Thundr found some of my lights but not all of them</div>
					<div className="Help-desc">
						Restart the application and make sure you are connected to the right network. Also, make sure
						that Thundr has permissions to access your local network if you have an active firewall. And if
						it still doesn't find it, make sure it's turned on and plugged in!
					</div>
					<div className="Help-title">
						When I start playing the song on Spotify, it pauses and doesn't start
					</div>
					<div className="Help-desc">
						This is a known bug. Will hopefully be fixed soon but if it does happen, just press play on
						Spotify again and don't spam the button.
					</div>
					<div className="Help-title">
						I toggled the effects but they still continue during the light show
					</div>
					<div className="Help-desc">
						For now, changing effects will only apply after the section in the song changes. This will
						likely be updated so that it is instant in a future update.
					</div>
					<div className="Help-title">I plugged in my MIDI keyboard and Thundr doesn't recognize it.</div>
					<div className="Help-desc">
						Make sure you plug in the MIDI keyboard before switching to the tab. If it's already plugged in
						just switch to "Home" and then to "Keyboard" again so that it searches for the device.
					</div>
					<div className="Help-title">I did everything and it doesn't work.</div>
					<div className="Help-desc">
						Thundr is still in beta so there may still be a lot of bugs but the good news is that it's in
						active development so if you have an issue, email{' '}
						<a href="mailto:help@thundr.io" target="_top">
							help@thundr.io
						</a>{' '}
						explaining what happened!
					</div>
				</div>
			</div>
		);
	}
}
