import User from '../models/UserModel.js';

export async function getUsers(req, res) {
  try {
    const { id } = req.params;

    const users = await User.find({ userId: id }, { __v: false });

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, surname, email, registeredDate } = req.body;

    const updatedClient = await User.findByIdAndUpdate(
      id,
      { name, surname, email, registeredDate },
      { new: true }
    );

    res.status(200).json(updatedClient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createUser(req, res) {
  try {
    const { name, lastName, email, registrationDate } = req.body;

    const newUser = new User({ name, lastName, email, registrationDate });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
