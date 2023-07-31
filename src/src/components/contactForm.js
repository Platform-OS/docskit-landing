import React from 'react';
import './contact-form.css';

export default function ContactForm() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = {};
    const formData = new FormData(event.currentTarget);
    formData.forEach((v, p) => request[p] = v);
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(request)
  };
    try {
      const fetchResponse = await fetch(`/api/contact`, settings);
      const data = await fetchResponse.json();
      console.log(data);
    } catch (e) {
      return e;
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="contact-form">
        <div className="contact-form__col">
          <fieldset className="contact-form__fieldset">
            <label htmlFor="name">Name</label>
            <input className="input" type="text" name="name" id="name" required />
          </fieldset>
          <fieldset className="contact-form__fieldset">
            <label htmlFor="email">Email</label>
            <input className="input" type="email" name="from" id="email" required />
          </fieldset>
          <fieldset className="contact-form__fieldset">
            <label htmlFor="subject">Subject</label>
            <div className="select-wrapper">
              <select className="input--select" name="subject" id="subject">
                <option value="demo">Book a demo</option>
                <option value="sales">Contact sales</option>
                <option value="tech">Technical enquiry</option>
              </select>
            </div>
          </fieldset>
        </div>
        <div className="contact-form__col">
          <fieldset className="contact-form__fieldset">
            <label htmlFor="message">Message</label>
            <textarea className="input input--textarea" name="message" id="message" rows="5" required></textarea>
          </fieldset>
        </div>
      </div>
      <div className="contact-form__actions">
        <button className="transition-colors font-bold whitespace-nowrap bg-button-primary border-2 border-button-primary-stroke hover:border-button-primary-stroke-hover hover:bg-button-primary-hover text-button-primary-foreground hover:text-button-primary-foreground-hover py-2 px-4 rounded-button ">Send</button>
      </div>
    </form>
  );
};
