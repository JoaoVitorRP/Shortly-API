import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function tokenValidation(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).send("Missing bearer token");

    let error;
    jwt.verify(token, process.env.JWT_KEY, function(err, decoded){
        if (err) error = err.message;
        if (decoded) res.locals.userId = decoded.userId;
    })

    if (error) return res.sendStatus(401);

    next();
}
