import React from 'react';
import { useRef } from "react";
import style from './ContactForm.module.css';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send');
    const form = useRef();
    const emailInput = useRef();
    const nameInput = useRef();
    const messageInput = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ikps24o', 'template_kwnbeld', form.current, 'QeNVIgbwzdRkKR52T')
            .then((result) => {
                // show the user a success message
            }, (error) => {
                // show the user an error
            });
        nameInput.current.value = '';
        emailInput.current.value = '';
        messageInput.current.value = '';

        setFormStatus('Message Sent!');
    }
    return (
        <div className={style.container}>
            <div className="container mt-5">
                <h2 className="mb-3">Contact Me</h2>
                <form onSubmit={sendEmail} ref={form}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="from_name">
                            Name
                        </label>
                        <input className="form-control" type="text" id="name" name='from_name' ref={nameInput} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="from_email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" name='from_email' ref={emailInput} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" name='message' ref={messageInput} required/>
                    </div>
                    <button className="btn btn-danger" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ContactForm