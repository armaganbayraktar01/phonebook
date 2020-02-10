import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';



class Forms extends Component
{
    static propTypes = {
        addContact: PropTypes.func
    };

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

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
            number:""
        })
    }


    render() {
        return (
            <div>
                <Card style={{margin:'15px', border:'none'}}>
                    <Form onSubmit={ this.onSubmit }>
                        <FormGroup controlId="formBasicEmail">
                            <FormLabel>Name Surname</FormLabel>
                            <FormControl type="text" placeholder="Enter Name Surname"
                            name="name" value={this.state.name} onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup controlId="formBasicEmail">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl type="text" placeholder="Enter Number" 
                            name="number" value={this.state.number} onChange={this.onChange}/>
                        </FormGroup>
                        <Button type="submit" variant="primary" block>Add Contact List</Button>
                    </Form>
                </Card>                
            </div>
        );
    }
}

export default Forms;
