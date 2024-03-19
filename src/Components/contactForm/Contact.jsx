import React, { Fragment } from "react";
import "./Contact.css";
// import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { Icon } from "@chakra-ui/icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  // const { colorMode } = useColorMode();

  return (
    <div id="contact">

    <div id="Contact">
      {" "}
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>Contact Me </h2>
          </div>
       
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="contact-widget ">
                  <div className="contact-widget-item">
                    <div className="icon" >
                    </div>
                    <div className="text">
                      <h5>Address</h5>
                      <p>Kashipur, Uttarakhand</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text" id="contact-phone">
                      <h5>Contact me</h5>
                      <p>+91 8449438237</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text" id="contact-email">
                      <h5>Email</h5>
                      <p>abhiprajapati569@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text" id="contact-github">
                      <h5>Github</h5>
                      <Link to={"https://github.com/abhishek10kumar"} target="blank">@abhishek10kumar</Link>
                    </div>
                  </div>
                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text" id="contact-linkedin">
                      <h5>Linkedin</h5>
                      <Link to={"https://www.linkedin.com/in/abhishekPrajapati569/"} target="blank">@abhishekPrajapati569</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="contact-form">
                  <form
                    action="https://getform.io/f/pbgxydwa"
                    method="POST">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea
                      placeholder="Message"
                      type="text"
                      name="message"></textarea>
                    <button
                      type="submit"
                      className="site-btn"
                      formTarget="_blank">
                      {" "}
                      Send Message 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  </div>
  );
};

export default Contact;
