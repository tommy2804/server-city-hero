import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER USER
export const register = async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      gender,
      role,
      location,
      isInvolved,
      myRequests,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const checkUser = await User.findOne({ email });
    if (checkUser) return res.status(403).json({ message: 'User already exists' });
    const newUser = new User({
      email,
      password: passwordHash,
      firstName,
      lastName,
      phoneNumber,
      city: 'Tel Aviv',
      gender,
      role,
      location,
      isInvolved,
      myRequests,
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    res.status(201).json({
      token,
      id: savedUser._id,
      email: savedUser.email,
      fullName: savedUser.firstName + ' ' + savedUser.lastName,
    });
  } catch (error) {
    res.status(500).json([error, error.message]);
  }
};

//  LOGIN USER

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    console.log(user);

    if (!user) return res.status(403).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(403).json({ message: 'password is incorrect' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({
      id: user._id,
      token,
      email: user.email,
      fullName: user.firstName + ' ' + user.lastName,
    });
  } catch (error) {
    res.status(500).json([error, error.message]);
  }
};
