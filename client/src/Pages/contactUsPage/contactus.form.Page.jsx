import React, { useState } from "react";
import { addMessage } from "../../services/service";
import "./contactus.css";

export const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [cellPhone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const costumerMessage = { name, message, cellPhone, email };
    if (name === "" || message === "" || cellPhone === "" || email === "") {
      alert("Please enter all required");
    } else {
      addMessage(costumerMessage);
      alert("we recive your comment, thanks for it");
      setName("");
      setMessage("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>We want to hear from you</h1>
      <div className="form-group">
        <label className="formLbl" htmlFor="name">
          Costumer Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="formLbl" htmlFor="message">
          Message:
        </label>
        <textarea
          className="form-control"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="formLbl" htmlFor="phone">
          Phone Number:
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={cellPhone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="formLbl" htmlFor="email">
          Email Address:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
