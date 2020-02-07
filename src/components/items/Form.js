import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';


class Form extends Component
{
    static propTypes = {
        addContact: PropTypes.func
    };

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    state = {
        name: "",
        number: ""
    };

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });

        this.setState({
            name: "",
            number: ""
        });
    }

    render() {
        return (
            <div>
                <form onSubmit = { this.onSubmit }> 
                    <input name="name" id="name" value={this.state.name} onChange={this.onChange} placeholder="Enter a Name Surname.."/>
                    <br/>
                    <input name="number" id="number" value={this.state.number} onChange={this.onChange}  placeholder="Enter a Phone.."/>
                    <br/>
                    <button>Add Phonebook</button>
                </form>
                    
            </div>
        );
    }
}

export default Form;