const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
    // expiresIn: 1,
    // expiresIn: "10s",
  });

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, roles } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password.toString(), salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    roles,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Incorrect Email or Password");
  }
});
const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.body.Id });
  if (user) {
    const passwordMatch = await bcrypt.compare(
      req.body.currentPassword,
      user.password
    );
    if (passwordMatch) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(
        req.body.newPassword,
        saltRounds
      );
      user.password = hashedPassword;
      await user.save();
      res.status(200).json("Password Changed Successfully.");
    } else {
      res.status(401).json("Incorrect Password");
    }
  } else {
    res.status(404).json("User not found");
  }
});
const resetPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(
      process.env.RESET_PASSWORD,
      saltRounds
    );
    user.password = hashedPassword;
    await user.save();
    res.status(200).json("Password resetted Successfully.");
  } else {
    res.status(404).json("User not found");
  }
});

const verificationToken = crypto.randomBytes(20).toString("hex");
const sendEmail = asyncHandler(async (req, res) => {
  const toEmail = req.body.email;

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error("User not Found");
    }

    const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_NAME,
      port: process.env.TRANSPORTER_PORT,
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: toEmail,
      subject: "Email Verification",
      html: ` Dear ${toEmail},<br/><br/><a href="${verificationLink}" target="_blank">Click👆 this link to complete verification.</a> `,
    };
    await transporter.sendMail(mailOptions);
    user.token = verificationToken;
    await user.save();
    res.status(200).json("Email sent succesfully!");
  } catch (error) {
    res.status(400).json(error.message);
  }
});
const verifyToken = asyncHandler(async (req, res) => {
  const user = await User.findOne({ token: req.body.token });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).json("User not found");
  }
});

const changeForgottenPassword = asyncHandler(async (req, res) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.newPassword, saltRounds);
  const user = await User.findOneAndUpdate(
    { _id: req.body._id },
    { password: hashedPassword }
  );
  if (user) {
    res.status(200).json("Password changed successfully");
  } else {
    res.status(400).json("Something went wrong");
  }
});
module.exports = {
  loginUser,
  registerUser,
  changePassword,
  resetPassword,
  sendEmail,
  verifyToken,
  changeForgottenPassword,
};
