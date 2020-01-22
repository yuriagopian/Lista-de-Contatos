import React from  'react';
import { View , Text, StyleSheet } from 'react-native';


const containerStyle = {



};
const titleStyle = {
	
}
;


// Stateless | Functional
const Header  = (props) => (

	<View style= {style.container}>
	<Text style ={style.title}> {props.title} </Text>
	</View>
	);

const style = StyleSheet.create( {
	container :{
		marginTop: 23,	
		backgroundColor : '#0491FE',
		alignItems: 'center',
		justifyContent: 'center',

	},

	title :{
		fontSize: 30,
		color: '#FFFFFF',


	}

});

export default Header ;

