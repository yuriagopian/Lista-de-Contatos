import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import PeopleList  from  './src/components/PeopleList';

//improtando axios api Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js
import axios from 'axios';

export default class App extends React.Component {
    
    //montara o array de pessoas 
    constructor (props){

        super(props);

        this.state = {
            peoples: []
        };
    }

    componentDidMount(){
        // axios da uma busca na  url para trazer um json dos resultados da api 
       //api random user ira criar 5 usuarios aleatorios para serem inseridos  a api 
      // ou seja o .get ira buscar os dados assim que buscar 
     // a promisse sera resolvida e retornara um response que é a resposta pgando o data e jogando na const results
              /*promises */           
        axios
            .get('https://randomuser.me/api/?nat=br&results=10')
            .then(response => {
             const { results } = response.data;
             this.state= 
             // sempre que queremos atualizar um status utilizaremos o setState
             this.setState({

                peoples: results
             });
         })


    }

     
// Renderiza as informações na tela do app 
     render(){ 
     	
     // renderiza os componentes na tela, sobe o hearder e ainda com o this.renderList traz as coisa que 
     //são estão renderizadas logo no código acima
        return (<>
            <Header title  ="Lista de Contatos" /> 
				<ScrollView>
                
				<PeopleList peoples = {this.state.peoples} />
				</ScrollView>
                </>
	    );
      }
} 








