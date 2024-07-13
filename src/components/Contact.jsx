import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/Contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const form = document.createElement('form');
    form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSdPqa6vDWBu9L63li4ctNa_aYkc6df6L24Bo37XFCc4r5MdIA/formResponse';
    form.method = 'POST';
    form.target = 'hidden_iframe';

    const nameField = document.createElement('input');
    nameField.name = 'entry.1178247588';
    nameField.value = data.name;
    form.appendChild(nameField);

    const emailField = document.createElement('input');
    emailField.name = 'entry.1421266574';
    emailField.value = data.email;
    form.appendChild(emailField);

    const messageField = document.createElement('input');
    messageField.name = 'entry.2120934617';
    messageField.value = data.message;
    form.appendChild(messageField);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    alert('Your message has been sent!');
  };

  return (
    <div className="contact-section" id="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <span className="error">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span className="error">Invalid email address</span>}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea {...register('message', { required: true })}></textarea>
          {errors.message && <span className="error">This field is required</span>}
        </div>
        <button type="submit">Send</button>
      </form>
      <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
    </div>
  );
};

export default Contact;
