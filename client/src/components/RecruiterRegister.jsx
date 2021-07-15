import React, { useState } from "react";
import "../CSS/Registration.css";
import { useHistory } from "react-router";
import axios from "axios";

const RecruiterRegistration = () => {
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [url, setUrl] = useState("");
  const [officialContact, setOfficialContact] = useState("");
  const [nameHrHead, setNameHrHead] = useState("");
  const [emailHrHead, setEmailHrHead] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const history = useHistory();

  async function submit(e) {
    e.preventDefault();
    try {
      const registerData = {
        name,
        domain,
        address,
        email,
        aboutCompany,
        url,
        officialContact,
        nameHrHead,
        emailHrHead,
        phoneNo,
      };
      await axios.post(
        "http://localhost:5000/recruiters/register",
        registerData
      );
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="div_1">
      <h1>Register</h1>

      <div className="div_2">
        <div className="div_3">
          <h3>NAME</h3>
          <textarea
            name="name"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></textarea>
          <h3>DOMAIN/INDUSTRY</h3>
          <textarea
            name="domain"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setDomain(e.target.value)}
            value={domain}
          ></textarea>
          <h3>ADDRESS</h3>
          <textarea
            name="address"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></textarea>
          <h3>EMAIL ADDRESS</h3>
          <textarea
            name="email"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></textarea>
          <h3>ABOUT COMPANY</h3>
          <textarea
            name="aboutCompany"
            id=""
            cols="50"
            rows="10"
            onChange={(e) => setAboutCompany(e.target.value)}
            value={aboutCompany}
          ></textarea>
        </div>

        <div className="div_4">
          <h3>WEBSITE URL</h3>
          <textarea
            name="url"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          ></textarea>
          <h3>OFFICIAL CONTACT</h3>
          <textarea
            name="officialContact"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setOfficialContact(e.target.value)}
            value={officialContact}
          ></textarea>
          <h3>NAME OF THE HR HEAD</h3>
          <textarea
            name="hrHead"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setNameHrHead(e.target.value)}
            value={nameHrHead}
          ></textarea>
          <h3>EMAIL OF THE HR HEAD</h3>
          <textarea
            name="emailHrHead"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setEmailHrHead(e.target.value)}
            value={emailHrHead}
          ></textarea>
          <h3>PHONE NUMBER</h3>
          <textarea
            name="PhoneNo"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
          ></textarea>
          <button onClick={submit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterRegistration;
