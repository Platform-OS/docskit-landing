import React from 'react';
import Message from '@components/message';
import './contact-form.css';

export default function ContactForm() {
  const hcaptcha_site_key = typeof window !== 'undefined' && window._hcaptcha_site_key;
  const [submitted, setSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
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
      if (data.status === 'ok') {
        setSubmitted(true);
        setErrors([]);
      } else if (data.errors?.length) {
        setErrors(data.errors);
      }
    } catch (e) {
      setErrors([e]);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://hcaptcha.com/1/api.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  if (submitted) {
    return (<Message variant="success">
      <>
        <h3>Thank you for getting in touch! </h3>

        We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
      </>
    </Message>
    )
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
            <input className="input" type="email" name="email" id="email" required />
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
      <div className="h-captcha" data-sitekey={hcaptcha_site_key} style={{ marginTop: '24px' }} />
      <div className="contact-form__actions">

        <button disabled={isLoading} className="transition-colors font-bold whitespace-nowrap bg-button-primary border-2 border-button-primary-stroke hover:border-button-primary-stroke-hover hover:bg-button-primary-hover text-button-primary-foreground hover:text-button-primary-foreground-hover py-2 px-4 rounded-button ">Send</button>
      </div>
      {!!errors.length && (<Message variant="error">
        <div>
          There were some errors with the form submission. Please try again later.
        </div>
      </Message>)}
    </form>
  );
};
