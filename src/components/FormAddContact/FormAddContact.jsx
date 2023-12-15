import React, { Component } from "react";
import { Form, Container, Label, Button, Input } from "./FormAddContact.styled";


export class FormAddContact extends Component {
  render() {
    return (
      <Container>

      <Form>
        <Label>
          Contact Name:
          <Input type="text" name="name" required />
        </Label>
        <Button type="submit">Додати контакт</Button>
      </Form>
      </Container>
    );
  }
}