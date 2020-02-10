import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import Forms from './items/Forms';
import List from './items/List';

// state içermediği için stateless olarak tanımladık.
const Contacts = props =>

<div>
    <Card style={{width:'450px', margin:'50px auto', padding:'10px'}}>
        <List contacts = { props.contacts } />
        <Forms addContact = { props.addContact }/>
    </Card>
</div>;


Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func
    
};

export default Contacts;
