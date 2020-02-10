import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, ListGroup, ListGroupItem, Badge, FormControl} from 'react-bootstrap';



class List extends Component
{
    static propTypes = {
        contacts: PropTypes.array.isRequired 
    };

    state = {
        filterText: ""
    };

    // arrow func yazdığımız için bind işlemi yapmadık
    onChangeFilterText = (e) => {
        this.setState({
            filterText: e.target.value
        })
    }

    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        );
        return (
            <div>
                <Card style={{margin:'15px', border:'none'}}>
                    <FormControl as="input" placeholder="Filtered.."
                    name={"list-filter"} value={this.state.filterText}
                    onChange={this.onChangeFilterText}>
                    </FormControl>
                </Card> 

                <Card style={{margin:'15px', border:'none'}}>
                    <ListGroup as="ul">{
                        filteredContacts.map( contacts =>
                        <ListGroupItem as="li" key={contacts.number}>
                            <Badge>{ contacts.name }</Badge>
                            <Badge variant="dark" className ={'font-size:15px, float-right'}>{ contacts.number }</Badge>                          
                        </ListGroupItem>
                        )}                    
                    </ListGroup>
                </Card>                    
            </div>
        );
    }
}

export default List;
