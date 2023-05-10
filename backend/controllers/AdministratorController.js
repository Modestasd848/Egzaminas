import Administrator from '../models/AdministratorModel.js';

export async function adminLogin(req, res) {
  try {
    const { username, password } = req.body;

    const admin = await Administrator.findOne({ username, password });
    if (!admin) {
      return res.status(404).json({ message: 'Incorrect Login' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function registerAdmin(req, res) {
  try {
    const { username, password } = req.body;

    const newUser = new Administrator({ username, password });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
