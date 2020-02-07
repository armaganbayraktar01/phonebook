import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css'

class List extends Component
{

    static propTypes = {
        contacts: PropTypes.array.isRequired,
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
            <div className={"listArea"}>
                <input type="text" 
                id={"list-filter"} 
                name={"list-filter"} 
                value={this.state.filterText} 
                onChange={this.onChangeFilterText} 
                placeholder={"filter by name or phone"}/>
                <ul className={"list"}>
                    {
                        filteredContacts.map( contacts =>
                            <li key={contacts.number}>
                                <span className={"name"}>{ contacts.name }</span>
                                <span className={"number"}>{ contacts.number }</span>
                                <span className={"clearfix"}></span>
                            </li>
                        )
                    }

                </ul>
                    
            </div>
        );
    }
}


export default List;