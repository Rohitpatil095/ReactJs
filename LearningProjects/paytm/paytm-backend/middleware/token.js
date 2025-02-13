const jwt = require("jsonwebtoken");
const TokenException = require("../errors/TokenException");
const {jwtDecode} = require("jwt-decode");

const userToken = async (id) => {
  return jwt.sign(
    {
      userId: id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
};

const validateToken = async (token) => {
  if (!token) throw new Error("Token must be provided before proceed..");
  const decodeToken = jwtDecode(token);

  if (tokenExpired(decodeToken)) {
    return userToken(token.userId);
  }
  return jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err) {
      console.log(err);
      throw new TokenException("Error during user token generation..");
    }
    return decodedToken;
  });
};

const tokenExpired = async (token) => {
  const currDateTime = Date.now() / 1000;

  return token.exp < currDateTime;
};

module.exports = { userToken, validateToken };
