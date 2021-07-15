import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../CSS/Registration.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [courseYaer, setCourseYaer] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [experience, setExperience] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [collage, setCollage] = useState("");
  const [website, setWebsite] = useState("");
  const [preferredRole1, setPreferredRole1] = useState("");
  const [preferredRole2, setpreferredRole2] = useState("");
  const history = useHistory();

  async function submit(e) {
    e.preventDefault();
    try {
      const registerData = {
        firstName,
        dateOfBirth,
        phoneNo,
        courseYaer,
        aboutMe,
        experience,
        lastName,
        address,
        email,
        collage,
        website,
        preferredRole1,
        preferredRole2,
      };

      await axios.post("http://localhost:5000/students/register", registerData);
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
          <h3>First name</h3>
          <textarea
            name="firstname"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          ></textarea>
          <h3>Date of birth</h3>
          <textarea
            name="dateOfbBirth"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setDateOfBirth(e.target.value)}
            value={dateOfBirth}
          ></textarea>
          <h3>Phone Number</h3>
          <textarea
            name="phoneNo"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
          ></textarea>
          <h3>Course with year</h3>
          <textarea
            name="courseWithYear"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setCourseYaer(e.target.value)}
            value={courseYaer}
          ></textarea>
          <h3>About me</h3>
          <textarea
            name="aboutMe"
            id=""
            cols="50"
            rows="10"
            onChange={(e) => setAboutMe(e.target.value)}
            value={aboutMe}
          ></textarea>
          <h3>work experience</h3>
          <textarea
            name="experience"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
          ></textarea>
        </div>

        <div className="div_4">
          <h3>Last name</h3>
          <textarea
            name="lastName"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></textarea>
          <h3>Address</h3>
          <textarea
            name="address"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></textarea>
          <h3>E-mail</h3>
          <textarea
            name="email"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></textarea>
          <h3>College</h3>
          <textarea
            name="collage"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setCollage(e.target.value)}
            value={collage}
          ></textarea>
          <h3>Website/portfolio</h3>
          <textarea
            name="website"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setWebsite(e.target.value)}
            value={website}
          ></textarea>
          <h3>Preferred role</h3>
          <textarea
            name="oreferredrole1"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setPreferredRole1(e.target.value)}
            value={preferredRole1}
          ></textarea>
          <h3>Preferred role</h3>
          <textarea
            name="preferredRole2"
            id=""
            cols="50"
            rows="2"
            onChange={(e) => setpreferredRole2(e.target.value)}
            value={preferredRole2}
          ></textarea>
          <button onClick={submit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
