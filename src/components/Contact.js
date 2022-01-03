import React, { useRef, useEffect } from "react";
import M from "materialize-css";

import bg_2 from "../img/pokemon.jpg";
import ContactForm from "./ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  const me = {
    name: "Ifeanyi Kingsley Nwabor",
    email: "nwaborkingsley@gmail.com",
    Linkedin: "https://de.linkedin.com/in/iknwabor",
    GitHub: "https://github.com/Ifeanyi-Kingsley-Nwabor",
  };
  return (
    <div className="container">
      <div className="row contact-card">
        <div className="col s12 ">
          <div className="card ">
            <div className="card-image">
              <img src={bg_2} alt="and this is me" className="responsive-img" />
              <span className="card-title"></span>

              <a
                className="waves-effect waves-light btn-floating halfway-fab  red modal-trigger"
                href="#modal1"
              >
                <i className="material-icons">email</i>
              </a>
              <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
                <div className="modal-content ">
                  <h4>Send a quick message...</h4>
                  <p>
                    The Email is checked quite regularly, so you can always
                    expect a prompt response.
                  </p>
                  <ContactForm />
                </div>
                <div className="modal-footer">
                  <a
                    href="/contact"
                    className="modal-close waves-effect waves-green btn-flat"
                  >
                    Close
                  </a>
                </div>
              </div>
            </div>
            <div className="card-content">
              <p>
                Interested to know more or would like to contribute or discuss
                about anything... Then click on the <i>red button</i> button to
                shoot me a quick message. You can also check out the contact
                links shown below. I am always open to your feedback and look
                forward to building super fantastic products with youuu...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <p>Email: {me.email}</p>
        <div className="common-links">
          <a
            // className="waves-effect waves-light btn-floating social linkedin"
            className="waves-effect waves-light btn"
            href={me.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
            {/* <i className="fa fa-linkedin"></i> */}
          </a>

          <a
            // className="waves-effect waves-light btn-floating social github"
            className="waves-effect waves-light btn"
            href={me.GitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            {/* <i className="fa fa-github"></i> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
