import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { capitalizeFirstLetter }   from '../util';


const PeopleListItem = props => {
	const {people}  = props;
	// agora vamos criar um elemento que retornara o nome da  pessoa que esta  na lista que a api gerou
   // declarando uam const first afim de evitar a chamada repetida 
	const {title,  first , last } = people.name;
	   return (

	   	  <TouchableOpacity  onPress={()=> console.log('clicou em mim !!!', first )} >
			<View style = {styles.line}>
			       <Image style = {styles.avatar} source= {{ uri : people.picture.thumbnail }}   />
		        	<Text style ={styles.lineText}> 
		        	{ `${
		        		capitalizeFirstLetter(title)} ${
		        		capitalizeFirstLetter(first)} ${
		        		capitalizeFirstLetter(last)}` } 
		        	</Text>
		    </View>
		  </TouchableOpacity>
		);
}


   const  styles = StyleSheet.create ({	
	line: {
        	height: 60,
        	borderBottomWidth:1,
        	borderBottomColor: "#FD0101",
        	alignItems: 'center' ,
        	flexDirection :'row',
        },

        lineText: {
        	fontSize: 20,
        	paddingLeft:15,
        	flex: 7

        },

        avatar:{
        	aspectRatio: 1,
        	flex : 1,
        	marginLeft: 15,	
        	borderRadius : 20
        }

});

export default PeopleListItem;