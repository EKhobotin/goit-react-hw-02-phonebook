import React, {Component} from "react";

export class FormAddContact extends Component {
  render() {
    return (
      <form>
        <label>
          Ім'я:
          <input type="text" name="name" required />
        </label>
        <button type="submit">Додати контакт</button>
      </form>
    );
  }
}