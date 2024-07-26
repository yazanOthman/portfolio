import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSendEmail = async (e) => {
    e.preventDefault();

    const credentials = {
      service_id: "service_65xaz7s",
      template_id: "template_wzxempa",
      user_id: "zU_OGA5dZCKx-aaoE",
    };

    const payload = {
      from_name: name,
      from_email: email,
      to_name: "Yazan dev",
      message: message,
    };

    try {
      const response = await emailjs.send(
        credentials.service_id,
        credentials.template_id,
        payload,
        credentials.user_id
      );
      if (response) {
        toast.success("Your email has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error("failed to send email, please try again later");
    }
  };

  return (
    <section className="section" id="contact">
      <Toaster />

      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h6 className="section-title mb-5">Contact Me</h6>
        <form
          onSubmit={handleSendEmail}
          className="contact-form col-md-10 col-lg-8 m-auto"
        >
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                size="50"
                className="form-control"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                requried
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="comment"
                id="comment"
                rows="6"
                className="form-control"
                placeholder="Write Something"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline-primary rounded"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
