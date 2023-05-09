import User from '../models/UserModel.js';

export async function getUsers(req, res) {
  try {
    const users = await User.find();

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

    const deletedClient = await User.findByIdAndDelete(id);

    res.status(200).json(deletedClient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createUser(req, res) {
  try {
    const { name, lastName, email, registeredDate } = req.body;

    const newUser = new User({
      name,
      lastName,
      email,
      registeredDate,
    });

    const createdUser = await newUser.save();

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
