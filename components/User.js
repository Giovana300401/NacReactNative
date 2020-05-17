import React, {Component} from 'react'
import {Text,View, Image} from 'react-native'

export default class User extends Component{
 constructor(props) {
      super(props);

      this.state = {
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

      var primeiroNome = responseJson['data']['first_name']
      var ultimoNome = responseJson['data']['last_name']

      this.setState({first_name: primeiroNome,
                  last_name: ultimoNome,})

    })
    .catch(error=>console.log(error))
  }

  render(){
    return(
      <View>
        <Text>Username: </Text>
        <Image>User Image: </Image>
        <Text>User Id: </Text>
        <Text>User E-mail: </Text>
      </View>
    );
  }
}