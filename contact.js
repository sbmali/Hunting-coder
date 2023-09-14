import React, { useState } from "react";
import styles from "@/styles/contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Thanks for contacting us");
        setphone("");
        setname("");
        setdesc("");
        setemail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact us</h1>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="mb-3">
            <label htmlFor="name" className={styles.label}>
              Enter your name
            </label>
            <input
              type="text"
              value={name}
              className={styles.input}
              onChange={handleChange}
              name="name"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              className={styles.input}
              onChange={handleChange}
              name="email"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className={styles.label}>
              phone
            </label>
            <input
              type="phone"
              value={phone}
              className={styles.input}
              onChange={handleChange}
              name="phone"
              id="phone"
            />
          </div>

          <div className="md-3"></div>
          <div className="mb-3">
            <label htmlFor="desc" className={styles.label}>
              Elaborate your concern
            </label>
            <textarea
              className={styles.textarea}
              value={desc}
              onChange={handleChange}
              placeholder="write your concern here"
              name="desc"
              id="desc"/
            >
          </div>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
