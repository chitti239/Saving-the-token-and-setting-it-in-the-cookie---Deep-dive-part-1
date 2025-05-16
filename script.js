const encrypt = (payload, secret) => {
  // your code here and return token
  const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

};

module.exports = encrypt;
