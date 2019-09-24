const JWT = require('jsonwebtoken');
const config = require('../config/config');

// Models
const User = require('../models/user');

jwtSignUser = user => {
  return JWT.sign({
    iss: 'konta',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, config.authentication.jwtSecret);
}

module.exports = {
  // Authenticate users to api with locale strategy email/password
  signUp: async (req, res, next) => {
    const { email, password } = req.value.body;

    const foundUser = await User.findOne({ "email": email });
    if (foundUser) {
      return res.status(403).json({ error: 'This email already exists !'});
    }

    const newUser = new User({
      email: email,
      password: password
    });
    await newUser.save();
    const token = jwtSignUser(newUser);

    res.status(200).json({ token, newUser });
  },

  signIn: async (req, res, next) => {
    const  email = req.value.body.email;
    const user = await User.findOne({ "email": email });
    const token = jwtSignUser(req.user);
    res.status(200).json({ token, user });
  },

  // Handle Users resources
  Index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json({ users });
  },

  getUser: async (req, res, next) => {
    /* const { userId } = req.params; */
    const { userId } = req.value.params;
    const user = await User.findById(userId);
    res.status(200).json({ user });
  },

  replaceUser: async (req, res, next) => {
    // Enforce that req.body contains all the fields
    const { userId } = req.value.params;
    const newUser = req.body;
    const user = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },

  updateUser: async (req, res, next) => {
    // req.body may contain any number of fields
    const { userId } = req.value.params;
    const newUser = req.body;
    const user = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },
}
