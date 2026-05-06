import { TopOfSections } from "../topOfSections/TopOfSections";
import "./contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Plasma from "../plasma/Plasma";

import emailjs from "@emailjs/browser";

export function Contact() {
  const [response, setResponse] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const { firstName, lastName, email, message } = formData;

  const OnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    try {
      emailjs.init({
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      });

      if (firstName != "" && lastName != "" && email != "" && message != "") {
        var params = {
          FirstName: capitalizeFirstLetter(firstName.trim()),
          LastName: capitalizeFirstLetter(lastName.trim()),
          Email: email,
          Message: message,
        };

        var serviceId = import.meta.env.VITE_SERVICE_ID;
        var templateId = import.meta.env.VITE_TEMPLATE_ID;

        emailjs.send(serviceId, templateId, params).then((res) => {
          setResponse("Message sent successfully");
          setTimeout(()=>{
            setResponse("")
          },3000)
        });

        params = {
          FirstName: "",
          LastName: "",
          Email: "",
          Message: "",
        };
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        window.alert("Please put all your details first");
      }
    } catch (error) {
      setResponse("Unable to send message, ", error.message || error);
      setTimeout(()=>{
        setResponse("")
      },3000)
      console.error("Unable to send email", error.message || error);
    }
  };

  return (
    <section className="ContactMainSec" id="contact">
      <div className="ContactContainerWithAnimationMainDiv">
        <Plasma
          color="#a02b00"
          speed={0.5}
          direction="Ping Pong"
          scale={2}
          opacity={1}
          mouseInteractive={true}
        />

        <div className="ContactMainDiv">
          <TopOfSections
            title="Contact"
            desc="Get in Touch with me"
            number="04"
          />
          <div className="ContactWelcomingMsgMainDiv">
            <p>Let's Create Something Together</p>
            <p>
              Got an idea ir project? I’m always open to meaningful
              conversations and collaborations. Feel free to reach out—let’s
              build something impactful together.
            </p>
          </div>
          <form onSubmit={HandleSubmitForm} className="ContactFormMainDiv">
            <div className="ContactCornerColorDiv"></div>
            <div className="ContactCornerColorDiv"></div>
            <div className="ContactCornerColorDiv"></div>
            <div className="ContactCornerColorDiv"></div>
            <div className="InsideContactFormMainDiv">
              <div className="FirstAndLastNameDiv">
                <div>
                  <label htmlFor="firstNameId">First name</label>
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    id="firstNameId"
                    value={firstName}
                    onChange={OnChange}
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="lastNameId">Last name</label>
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    id="lastNameId"
                    value={lastName}
                    onChange={OnChange}
                  />
                  <br />
                </div>
              </div>
              <div className="InputMainDiv">
                <label htmlFor="emailId">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="emailId"
                  value={email}
                  onChange={OnChange}
                />
                <br />
              </div>
              <div className="InputMainDiv">
                <label htmlFor="MessageId">Message</label>
                <br />
                <textarea
                  type="text"
                  name="message"
                  id="MessageId"
                  value={message}
                  onChange={OnChange}
                ></textarea>
              </div>
              <div className="SubmitformBtnDiv">
                <button type="submit">Send</button>
              </div>
              <div className={response!==""?"ResponseOnMsgSentMainDiv ShowResponseMsg":"ResponseOnMsgSentMainDiv"}>
                <p>{response}</p>
              </div>
            </div>
          </form>

          <div className="LinksMainDiv">
            <div className="LinksTopDiv">
              <div></div>
              <p>Or Reach out the Old Fashion way</p>
            </div>
            <div className="ContactSocilLinksDiv">
              <div>
                <p className="LinkNameOnLinkDiv">LinkedIn</p>
                <p>Lets connect ,professional DMs are welcomed</p>
                <FontAwesomeIcon
                  icon={faArrowUpLong}
                  className="ContactSocilLinksIcons"
                />
              </div>
              <div>
                <p className="LinkNameOnLinkDiv">Github</p>
                <p>View my repositories and open source</p>
                <FontAwesomeIcon
                  icon={faArrowUpLong}
                  className="ContactSocilLinksIcons"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
