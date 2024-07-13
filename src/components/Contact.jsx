import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../css/Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = (data) => {
    const form = document.createElement("form");
    form.action =
      "https://docs.google.com/forms/d/e/1FAIpQLSdPqa6vDWBu9L63li4ctNa_aYkc6df6L24Bo37XFCc4r5MdIA/formResponse";
    form.method = "POST";
    form.target = "hidden_iframe";

    const nameField = document.createElement("input");
    nameField.name = "entry.1178247588";
    nameField.value = data.name;
    form.appendChild(nameField);

    const emailField = document.createElement("input");
    emailField.name = "entry.1421266574";
    emailField.value = data.email;
    form.appendChild(emailField);

    const messageField = document.createElement("input");
    messageField.name = "entry.2120934617";
    messageField.value = data.message;
    form.appendChild(messageField);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setFormStatus("success");
    reset();
  };

  useEffect(() => {
    if (formStatus === "success") {
      const timer = setTimeout(() => {
        setFormStatus(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  return (
    <div className="contact-page">
      <div className="contact-section">
        <h2>Say Hello</h2>
        <p>I value your feedback. Feel free to contact me. Drop a message and I'll get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label className="label">Name</label>
            <input
              autoComplete="off"
              name="name"
              id="name"
              className="input"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="input-group">
            <label className="label">Email</label>
            <input
              autoComplete="off"
              name="email"
              id="email"
              className="input"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="error">Invalid email address</span>
            )}
          </div>
          <div className="input-group">
            <label className="label">Message</label>
            <textarea
              autoComplete="off"
              name="message"
              id="message"
              className="input textarea"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="error">This field is required</span>
            )}
          </div>
          <button className="button2" type="submit">
            Send
          </button>
        </form>
        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        {formStatus === "success" && (
          <p className="success-message">Your message has been sent!</p>
        )}
        {formStatus === "error" && (
          <p className="error-message">
            Something went wrong, please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
