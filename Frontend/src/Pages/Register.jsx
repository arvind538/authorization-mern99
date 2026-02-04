import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("Registation Successfully");
    console.log(user);
    // API call here
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("res from server", res_data);

      if (response.ok) {
        // const res_data = await response.json();
        // console.log("res from server", res_data);
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token", res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        })
        toast.error("Registation Successfully");
        navigate("/login");
      } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);

      }
      // console.log(response);

    } catch (error) {
      console.log("register", error)
    }
  }




  return (
    <section className="section">
      <div className="container login-grid">

        <div className="register-logo">
          <img
            src="https://img.freepik.com/premium-vector/register-now-speech-bubble-collection-iconlabel-sticker-logo-badge-banner-design-template_359398-2303.jpg"
            alt="register"
          />
        </div>

        <div className="form">
          <h1>Register Form</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={user.username}
                onChange={handleInput}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone"
                value={user.phone}
                onChange={handleInput}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>

            <button className="btn">Register</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Register;
