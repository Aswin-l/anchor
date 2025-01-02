import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const MailSender = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "anchorTechnoSoft", // Replace with your EmailJS Service ID
        "anchorTechnoSoft", // Replace with your EmailJS Template ID
        formData,
        "qwPchRHkBbHHmaFYX" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Email sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div>
      <h2>Send an Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Email</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default MailSender;
