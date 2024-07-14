import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../css/Contact.css";
import contactImage from '../assets/contact_image.svg';

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
      <h2>Say Hello</h2>
          <p>
            I value your feedback. Feel free to contact me. Drop a message and
            I'll get back to you as soon as possible.
          </p>
      <div className="contact-section">
        
        <div className="contact-form-container">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`input ${errors.name ? "error" : ""}`}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="input-group">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`input ${errors.email ? "error" : ""}`}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="input-group">
              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className={`input ${errors.message ? "error" : ""}`}
              ></textarea>
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="button2">
              Send
            </button>
            {formStatus === "success" && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {formStatus === "error" && (
              <p className="error-message">Failed to send message. Try again.</p>
            )}
          </form>
        </div>
        <div className="contact-image-container">
          <img src={contactImage} alt="Contact" className="contact-image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
