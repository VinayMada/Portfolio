import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import "./ContactForm.css";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mwkgznan");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
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
      <br /><br /><br /><br />
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
      <br /><br /><br /><br />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
      </div>
      </div>
  );
}