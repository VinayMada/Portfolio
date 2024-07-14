import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import "./ContactForm.css";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mwkgznan");
  if (state.succeeded) {
    return (
      <div style={{ height: "630px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "600px", border: "2px solid whiteSmoke" }}>
          <h3 style={{ color: "white" }}>Your Message is successfully sent!</h3>
          <h3 style={{ color: "white" }}>Please wait for the reply.</h3>
        </div>
      </div>
    )
  }
  return (
    <div class="form-container">
      <div id='f-form'>
        <form onSubmit={handleSubmit}>
          <div className='top'>
            <label htmlFor="email" >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
            />
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <br /><br />
          <label htmlFor="Subject" >
            Subject
          </label>
          <input
            type='text'
            id="subject"
            name="subject"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
          <br /><br />
          <label htmlFor="message" >
            Message
          </label>
          <textarea
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br /><br />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}