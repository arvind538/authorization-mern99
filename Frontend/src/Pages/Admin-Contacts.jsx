import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify"
const AdminContacts = () => {

    const [contactData, setContactData] = useState([]);
    const { authorizationToken, API} = useAuth();


    const getContactsData = async () => {
        try {
            const response = await fetch(
                `${API}/api/admin/contacts`,
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );

            const data = await response.json();
            console.log("contact data", data);
            if (response.ok) {
                setContactData(data);
            }

        } catch (error) {
            console.log(error);
        }
    };


    const deleteContactById = async (id) => {
        try {
            const response = await fetch(
                `${API}/api/admin/contacts/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                }
            );

            if (!response.ok) {
                toast.error("Delete Failed!");
                return;
            }

            toast.success("Delete Successfully!");
            getContactsData();

        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Network error");
        }
    };


    useEffect(() => {
        getContactsData();
    }, []);

    return (
        <section className="admin-contacts-section">
            <h1 className="text-center m-5 p-5 text-4xl underline">All Contact Data</h1>
            <div className="container admin-user">


                {contactData.length === 0 ? (
                    <p className="text-center m-5 p-5">No contacts found!</p>
                ) : (
                    contactData.map((curContactData) => (
                        <div
                            key={curContactData._id}
                            className="contact-card m-2 p-2"
                        >

                            <p><b>Username:</b> {curContactData.username}</p>
                            <p><b>Email:</b> {curContactData.email}</p>
                            <p><b>Message:</b> {curContactData.message}</p>

                            <button
                                className="btn"
                                onClick={() => deleteContactById(curContactData._id)}
                            >
                                Delete
                            </button>

                        </div>
                    ))
                )}

            </div>
        </section>
    );
};

export default AdminContacts;
