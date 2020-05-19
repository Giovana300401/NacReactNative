import React, {Component} from 'react'
 import {Text,View, Image} from 'react-native'

 export default class UserList extends Component {
   
   constructor(props) {
      super(props);

      this.state = {
       
        valorEsperado: []
      };
  }

  componentDidMount(){
    this.fetchJSON();

  }

  fetchJSON(){
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then((responseJson)=> {
     
      var valorEsperado = responseJson


      this.setState({ 
        valorEsperado: valorEsperado
        })

    })
    .catch(error=>console.log(error))
  }


  render() {
    return(
      <View>
        <Image source={{uri:this.state.imagem}}
               style={{width: '100%',
                       height: 250,
                       resizeMode:'contain',
                       justifyContent:'center'}}/>
        <Text>{this.state.email} </Text>
        <Text>{this.state.first_name} {this.state.last_name}</Text>
      </View>
    );
  }
  }