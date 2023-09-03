import { useState } from "react";
import Chat from './chat.js';
import ContactList from './contactList.js';

export default function MessengerApp(){
    const [to, setTo] = useState(contacts[0]);
    return(
        <div>
            <ContactList
                contacts = {contacts}
                selectedContact={to}
                onSelect = {contact => setTo(contact)}
                />
            <Chat key={to.id} contact={to} />
        </div>
        
    );
}

const contacts = [
    {id: 0, name: 'name0', email:'name0@naver.com'},
    {id: 1, name: 'name1', email:'name1@naver.com'},
    {id: 2, name: 'name2', email:'name2@naver.com'},
];