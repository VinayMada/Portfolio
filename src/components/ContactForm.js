import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import "./ContactForm.css";
import Button from '@mui/material/Button';

require('dotenv').config();

export default function ContactForm() {
  const [state, handleSubmit] = useForm(`mwkgznan`);
  if (state.succeeded) {
    return (
      <div className="success-container">
        <div className="success-message">
          <h3>Your message was successfully sent!</h3>
          <p>Please wait for the reply.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className='form'>
        <div >
          <h3 style={{ color: "black" }}>Contact Form</h3>
          <TextField
            style={{width:"75%",padding:"10px"}}
            id="email"
            type='text'
            label="Email"
            name='email'
            placeholder='Email'
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <br /><br />
          <TextField
            style={{width:"75%",padding:"10px"}}
            id="subject"
            type='text'
            label="Subject"
            name='subject'
            placeholder='Subject'
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
          <br /><br />
          <TextField
            style={{ width: "75%",padding:"10px" }}
            id="message"
            type='text'
            multiline
            maxRows={20}
            label="Message"
            name='message'
            placeholder='Message'
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br /><br />
          <Button variant="contained" color="success" type="submit" disabled={state.submitting}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
