// Import Statements
import React from 'react';
import { Text, View } from 'react-native';

// Component
const AlbumnDetail = (props) => {
	return (
		<View>
			<Text>{props.albumn.title}</Text>
		</View>
	);	
} 

const styles = {};

// display or import
export default AlbumnDetail