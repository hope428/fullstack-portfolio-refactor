import React, { useState, useRef } from "react";
import "../../styles/Form.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_9eg3uph",
        "template_4vvi45b",
        form.current,
        "iXTpGEoKKQ0TnCi1z"
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
    setSent(true)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contactName") {
      setContactName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  return (
    <div className="container column about">
      {sent ? (
        <h1>Your message has been sent!</h1>
      ) : (
        <>
          <h1>Contact Me</h1>
          <form ref={form} onSubmit={handleFormSubmit}>
            <input
              value={contactName}
              name="contactName"
              onChange={handleChange}
              type="text"
              placeholder="Name"
              required
            />
            <input
              value={email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              value={message}
              name="message"
              onChange={handleChange}
              placeholder="Enter message..."
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}
