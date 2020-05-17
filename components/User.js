import React, {Component} from 'react'
import {Text,View, Image} from 'react-native'

export default class User extends Component{
 constructor(props) {
      super(props);

      this.state = {
        id : 0,
        email: '',
        imagem: '',
        first_name: '',
        last_name: '',
      };
  }

  componentDidMount(){
    this.fetchJSON();

  }

  fetchJSON(){
    fetch("https://reqres.in/api/users/7")
    .then(response => response.json())
    .then((responseJson)=> {

      var id = responseJson['data']['id']
   
      var email = responseJson['data']['email']

      var imagem = responseJson['data']['avatar']

      var primeiroNome = responseJson['data']['first_name']

      var ultimoNome = responseJson['data']['last_name']

      this.setState({
        
        id: id,
        email: email,
        imagem: imagem,
        first_name: primeiroNome,
        last_name: ultimoNome,})

    })
    .catch(error=>console.log(error))
  }

  render(){
    return(
      <View>
        <Text>{this.state.nome} </Text>
        <Image source={{url:this.state.imagem}}></Image>
        <Text>{this.state.id} </Text>
        <Text>{this.state.email} </Text>
      </View>
    );
  }
}