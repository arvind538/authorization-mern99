import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};
const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData)

    const [userData, setUserData] = useState(true);

    const { user, API } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }

    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(contact);
        alert("Contact message Successfully");

        try {
            const response = await fetch(`${API}/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
            }
            navigate("/");
        } catch (error) {
            // console.log("Error from Conatct Side");

        }

    };

    return (
        <>
            <section className="section">
                <div className="container contact-grid">

                    <div className="contact-logo">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PmwXg2uFFJll99mtnm75mfNBeXj3GAWcow&s"
                            alt="contact"
                        />
                    </div>

                    <div className="form">
                        <h1>Contact Form</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your name"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />

                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Enter your message"
                                    value={contact.message}
                                    onChange={handleInput}
                                ></textarea>

                            </div>

                            <button className="btn">Submit</button>
                        </form>
                    </div>

                </div>
            </section>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.528386371626!2d75.86403197421762!3d26.82314146393633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db770070b115f%3A0x6f306afd08a3e737!2sSwami%20Keshvanand%20Institute%20of%20Technology%2C%20Management%20%26%20Gramothan%20(SKIT)!5e0!3m2!1sen!2sin!4v1768502145705!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </>
    );
};

export default Contact;
