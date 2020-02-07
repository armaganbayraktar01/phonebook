import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';


class App extends Component
{ 
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [{
        name: "Armağan",
        number: "01234567890"
        },{
        name: "Özgiş",
        number: "01234567886"
    }]
  };

  addContact(contact){
    const { contacts } = this.state;
    contacts.push(contact);

    this.setState({
      contacts:contacts
    })
  }


  render(){
    return (
      <div className="App">
        <Contacts 
          contacts = { this.state.contacts } /* state yolladığımız için contact ta prop yakalayacaz */
          addContact = { this.addContact }
        />
      </div>
    );
  }

}

export default App;