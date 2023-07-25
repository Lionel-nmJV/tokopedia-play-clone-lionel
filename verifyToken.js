import jwt from "jsonwebtoken";
import req from "express/lib/request.js";
import res from "express/lib/response.js";
import {createError} from "./error.js";

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token
    if (!token)return next (createError(401, "You are not authenticated!"))

    jwt.verify(token, process.env.JWT, (err, user)=>{
        if (err)return next (createError(403, "Token is not valid!"));
        req.user = user;
        next()
    });
}