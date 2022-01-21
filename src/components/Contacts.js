import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_bDEcQN9XkBqeGiNWOM8hl";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form Send Successfully !! I will contact you as soon as possible !!"
        );
      })
      .catch((err) => console.error(`something went wrong ${err}`));
  };
  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>
          Please fill out form with a brief subject and I will get back as soon
          as possible. Thanks.
        </p>
        <span className="success-text">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/******************* name Input here*************************** */}
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                name="name"
                ref={register({
                  required: "please enter your name",
                  maxLength: 30,
                  message: "you must be less than 30 characters",
                })}
              />
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/******************* phone Input here*************************** */}
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Enter your Phone Number"
                name="phone"
                ref={register({
                  required: "please enter your phone number",
                })}
              />
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/******************* email Input here*************************** */}
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter your Email Address"
                name="email"
                ref={register({
                  required: "please enter your Email",
                  pattern: {
                    value: /^[a-zA-z0-9]+@([a-zA-z0-9]+\.)+[a-zA-z0-9]{2,3}$/i,
                    message: "invalid email",
                  },
                })}
              />
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/******************* Subject Input here*************************** */}
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                ref={register({
                  required: "please add a subject for your message",
                })}
              />
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/************description******* ** */}
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="Enter your message"
                name="description"
                ref={register({
                  required: "please add you messsage",
                })}
              ></textarea>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
