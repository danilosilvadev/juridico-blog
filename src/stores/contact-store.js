import { EventEmitter } from "events";

import Dispatcher from "../dispatchers/contact-dispatcher";


class ContactStore extends EventEmitter {
    constructor() {
        super();
        this.contact = {
            name: "",
            email: "",
            message: ""
        }
    }

    getAll() {
        event.preventDefault();
        console.log('Nome: ' + this.state.name);
        console.log('Email: ' + this.state.email);
        console.log('Message: ' + this.state.message);
    }

    handleActions(){

    }


}

const contactStore = new ContactStore();
Dispatcher.register(contactStore.handleActions.bind(contactStore));
window.Dispatcher = Dispatcher;
export default contactStore