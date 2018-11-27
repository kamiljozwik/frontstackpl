import React from 'react';
import { navigate } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])) // eslint-disable-line
    .join("&"); //eslint-disable-line
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      // .catch((error) => { throw new Error(error) });
      .catch((error) => { console.log(error) });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form
          name="contact"
          method="POST"
          // action="/"
          netlify="true"
          // onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              {'Temat'}
              <input type="text" name="title" />
            </label>
          </p>
          <p>
            <label>
              {'Email'}
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              {'Wiadomość'}
              <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Wyślij</button>
          </p>
        </form>
      </div>
    );
  }
}
