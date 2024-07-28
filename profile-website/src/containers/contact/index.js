import React, { useState } from "react";
import { RiContactsFill } from "react-icons/ri";
import PageHeaderContent from "../../components/pageHeader";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s2rhl87",
        "Protfolio_template",
        formData,
        "kGeRUIidr9i-JRqBH"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      description: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlsWrapper">
              <div className="nameWrapper">
                <input
                  name="name"
                  className="inputName"
                  type={"text"}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div className="emailWrapper">
                <input
                  name="email"
                  className="inputEmail"
                  type={"email"}
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div className="descriptionWrapper">
                <textarea
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  style={{ resize: "none" }}
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>

            <button>Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
