import React, { Component } from 'react';
import Contacts from './components/Contacts';
import { connect } from 'react-redux'; // store a bağlantı sağladık
import { addContact } from './actions/addContact';

class App extends Component
{
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }
/*
  state = {
    contacts: [{
      name: 'Armağan Bayraktar',
      number: '03552682901'
  },{
      name: 'Özgiş Bayraktar',
      number: '05370310517'
  }]
  }
*/
addContact(param){
  const { contacts } = this.props; //this.state
  contacts.push(param);

  this.setState({
    contacts:contacts
  })
}

  render(){
    console.log(this.props)
    return (
      <div className="App">
        <Contacts
          contacts = { this.props.contacts } //this.state
          addContact = { this.addContact }
        />    
      </div>
    );
  }
}

// store de yer alan contacts state ini propsa çevirip projeye dahil ettik
const mapStateToProps = state => ({
  // state => {return state} tüm stateyi yükler
  contacts: state.contacts // sadece contacts state yükledik
});

export default connect(mapStateToProps)(App);