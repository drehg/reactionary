// Import Statements
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumnDetail from './AlbumnDetail';
//import axios from 'axios';

// Component
class AlbumnList extends Component {
	state = { albumns: [] };

	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albumns: response.data }));
		}

	renderAlbumns() {
		return this.state.albumns.map(albumn =>
			<AlbumnDetail key={albumn.title} albumn={albumn} />
		);
	}

	render() {
		return (
			<View>
				{this.renderAlbumns()}
			</View>
		);
	}
}

// display or import
export default AlbumnList;
