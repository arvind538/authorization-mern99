require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const errorMiddleware = require("./middlewares/error-middleware");



// app.use(cors(corsOptions))
app.use(
    cors({
        origin: process.env.frontend_URI,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());

app.use("/api/auth", authRoute) // user,login, register,home
app.use("/api/form/", contactRoute); //service, 
app.use("/api/data", serviceRoute); //contact
app.use("/api/admin", adminRoute);


app.use(errorMiddleware);

const PORT = 4040;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})

