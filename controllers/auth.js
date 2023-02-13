import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER USER
export const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phoneNumber, role, location } = req.body;

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
      gender: 'Male',
      role,
      location,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign(
      { id: savedUser._id, fullName: `${savedUser.firstName + ' ' + savedUser.lastName}` },
      process.env.JWT_SECRET
    );

    res.status(201).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

//  LOGIN USER

export const login = async (req, res) => {
  try {
    const { email, password, location } = req.body;

    const user = await User.findOne({ email: email });
    console.log(user);

    if (!user) return res.status(403).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(403).json({ message: 'password is incorrect' });

    await User.findByIdAndUpdate(user._id, { location });

    const token = jwt.sign(
      { id: user._id, fullName: user.firstName + ' ' + user?.lastName, city: user.city },
      process.env.JWT_SECRET
    );

    res.status(201).json(token);
  } catch (error) {
    res.status(500).json([error, error.message]);
  }
};
