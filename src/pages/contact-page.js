import React, { Component } from 'react'

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
        alert('Nome: ' + this.state.name);
        alert('Email: ' + this.state.email);
        alert('Message: ' + this.state.message);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label>
                    Nome:
                    <input type="text" onChange={this.handleChangeName} /><br />
                </label><label>
                    E-mail:
                    <input type="text" onChange={this.handleChangeEmail} /><br /></label><label>
                    Mensagem:
                    <textarea onChange={this.handleChangeMessage} />
                </label><br />
                <input type="submit" value="Submit" />

            </form>
        )
    }
}

export default ContactPage