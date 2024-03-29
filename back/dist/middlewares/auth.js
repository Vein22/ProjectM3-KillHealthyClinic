"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    const { token } = req.headers;
    if (token === "Authenticated")
        next();
    else
        res.status(400).json({ message: "Error. Authentication missing" });
};
exports.default = auth;
