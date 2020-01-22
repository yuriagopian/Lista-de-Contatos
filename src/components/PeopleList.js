import React from  'react';
import { View , Text , StyleSheet} from 'react-native';

import PeopleListItem  from './PeopleListItem';

const PeopleList = props  => {

	const { peoples }  = props;
         // na primeira chamada do render lista ele vai retornar um array vazio
        // depois de montado o componete ele chama didMount ai ele busca a chamada da api axios
        const items = peoples.map(people => {
        	return (
        		<PeopleListItem 
        		    key = { people.name.first} 
        		    people = {people} />
        		    );
        });       

 return  (
	  <View style = {styles.container}>
        { items }
	  </View>	


	)
};

const styles = StyleSheet.create ({
	container:{
		// apertando CTRL+SHIFT + C abrimos o pallet de cores
		backgroundColor: '#0569FE'
        },
        
})

export default PeopleList;
