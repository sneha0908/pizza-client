import React, { useState } from 'react';
import pages from '../pages/LoginSignup.css'
import axios from 'axios';

function LoginSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [userNames, setUserNames] = useState([]);

  const handlePost = () => {
    axios.post('http://localhost:5000/register', { name, email, phoneno })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName("");
          setPhoneno("")
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

  const handleGet = () => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        const users = response.data;
        const names = users.map((user) => user.name);
        setUserNames(names);
      })
      .catch((error) => {
        console.error("GET request error:", error);
      });
  }

  return (
    <div className="container">
      <h1>WELCOME TO OUR WEBSITE</h1>
      <form>
      <label>Enter Name:&nbsp;&nbsp;</label>
        <input
          type="text"
          className="input-field" 
          placeholder="ur name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Enter Email:&nbsp;&nbsp;</label>
        <input
          type="email"
          className="input-field"
          placeholder="Enter ur emailId"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <lable>Enter Phoneno</lable>
        <input 
        type ="number"
          className="input-field"
          placeholder="Enter ur phoneno"
          value={phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
          />
         <br></br>
        <button type="button" onClick={handlePost}>Post</button>
        <button type="button" onClick={handleGet}>Get</button>
      </form>
      <p>{userNames.join(", ")}</p>
    </div>
  );
}

export default LoginSignup;
