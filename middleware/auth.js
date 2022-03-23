import config from "config";
import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  try {
    //check for token
    if (!token) {
      return res.status(401).json({ msg: "No token,authorization denied" });
    }

    const decoded = jwt.verify(token, config.get("jwtSecret"));
    if (!decoded)
      return res
        .status(401)
        .json({ msg: "Token verification failed, Authorization denied" });

    // Add user from payload
    req.user = decoded.id;
    next();
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
export default auth;
