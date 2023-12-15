import react, { Component } from "react";
import { nanoid } from "nanoid";
import { List, ListItem,Span } from "./ContactList.styled";

export class ContactsList extends Component {
    render() {
        const { contacts } = this.props;
        // console.log(contacts);
        return (
            <List>
                {contacts.map((el) =>
                    <ListItem key={nanoid()}>{el.name}: <Span>{el.number }</Span></ListItem>
                // { console.log(el); }
                )}
            </List>
        )
    }
}