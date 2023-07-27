import React from 'react';
import './Contact.css';

const Contact = () => {
    return(
        <div className='contact-container'>
            <h2> Get in Touch </h2>
            <form className='contact-form'>
                <div className='form-group'>
                    <label htmlFor='name'> Name </label>
                    <input type='text' id='name' name='name' required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="tel" id="contactNumber" name="contactNumber" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;