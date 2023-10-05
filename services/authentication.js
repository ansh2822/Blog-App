const JWT = require("jsonwebtoken");

const secret = "SuperMan@998765432123453%%%%*";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    profileImageURl: user.profileImageURl,
    role: user.role,
  };

  const token = JWT.sign(payload, secret);

  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateToken,
};
