import React from 'react';

function ContactForm() {
  return (
    <div className="form-wrapper">
      <form
        name="contact"
        method="POST"
        netlify="true"
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

export default ContactForm;
