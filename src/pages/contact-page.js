import React, { Component } from 'react'

import Styled from 'styled-components'

const Label = Styled.label`
            display: -webkit-flex;
            display: flex;
            margin-top: 15px;
            justify-content: center;
`

const Form = Styled.form`
        align-items: center;
        margin-top: 10%;
`

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Nome: ' + this.state.name);
        alert('Email: ' + this.state.email);
        alert('Message: ' + this.state.message);

    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Nome:
                    <input type="text" onChange={this.handleChangeName} /><br />
                </Label><Label>
                    E-mail:
                    <input type="text" onChange={this.handleChangeEmail} /><br /></Label><Label>
                    Mensagem:
                    <textarea onChange={this.handleChangeMessage} />
                </Label><br />
                <input type="submit" value="Submit" />

            </Form>
        )
    }
}

export default ContactPage