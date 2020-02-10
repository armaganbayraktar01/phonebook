import React, { Component } from 'react';
import Contacts from './components/Contacts';

class App extends Component
{
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }

state = {
  contacts: [{
    name: 'Armağan Bayraktar',
    number: '03552682901'
  },{
    name: 'Özgiş Bayraktar',
    number: '05370310517'
  }]
};

addContact(param){
  const { contacts } = this.state;
  contacts.push(param);

  this.setState({
    contacts:contacts
  })
}

  render(){
    return (
      <div className="App">
        <Contacts
          contacts = { this.state.contacts }
          addContact = { this.addContact }
        />    
      </div>
    );
  }

}

export default App;