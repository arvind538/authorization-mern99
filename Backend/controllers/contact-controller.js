const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const data = req.body;

        await Contact.create(data);

        return res.status(201).json({
            success: true,
            msg: "Message sent successfully"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Message not delivered",
            error: error.message
        });
    }
};

module.exports = contactForm;
