import Administrator from '../models/AdministratorModel.js';

export async function adminLogin(req, res) {
  try {
    const { username, password } = req.body;

    // Find admin user by username
    const admin = await Administrator.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    if (password !== admin.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Login successful
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
