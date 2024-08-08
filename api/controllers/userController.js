const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;
    const user = await User.findByIdAndUpdate(id, { name, phone }, { new: true });
    res.send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.send({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
