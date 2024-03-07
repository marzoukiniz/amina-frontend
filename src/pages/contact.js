 
import React, { useState, useContext } from 'react';
 
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
 
import { UserContext } from '../../context/user';
const Form = () => {
  const { doRegister } = useContext(UserContext);
  const [state, setState] = React.useState({
    email: "",
    username: "",
    file: null
  });

  function handleChange(e) {
    if (e.target.files) {
      setState({ ...state, [e.target.name]: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();

    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }
    
    // Use fetch or axios to submit the form
 
    const ret = await doRegister(formData);
    if (ret[0] === 'alert') {
      console.log('errorr')
    }
    else if (ret[0] === 'OK') {
      console.log('success')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
              <input
                  className="form-control "
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={state.email}
                  required
              />
              <label for="email">Email</label>
          </div>
          <div className="form-floating  mb-3">
              <input
                  className="form-control"
                  name="username"
                  placeholder="Enter username"
                  onChange={handleChange}
                  value={state.username}
                  required
              />
              <label for="username">username</label>
          </div>
          <div className="form-floating  mb-3">
          <input type="file" name="file" className="form-control" onChange={handleChange} />
          <label for="file"></label>
          </div>
     
      <input
         className="form-control"
        name="bot-field"
        type="text"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button type="submit" className="register-btn">Send</button>
    </form>
  );
}

const Contact = () => {
  return (
  
    <div><Navbar/>
    <div className="container contact-page">
        <div className="row">
            <div className="col-6 contact-form">
            <h1>Pick up that phone<br/>
<span className="text-colored"> and get in touch</span></h1>
      <Form/>
            </div>
            <div className="col-6">
                
            </div>
        </div>
    
    </div>
    <Footer/></div>
    
  );
};

export default Contact;