const jwt = require("jsonwebtoken");
const User = require("../models/user-model")

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(200).json({ message: "Unauthorization HTTP, Token not provide" });
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token form authmiddleware", jwtToken);
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECTECT_KEY);

        const userData = await User.findOne({ email: isVerified.email }).select({
            password: 0,

        });
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Unauthorization . Invalid Token" });
    }

}

module.exports = authMiddleware;