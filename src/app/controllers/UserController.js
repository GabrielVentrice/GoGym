import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    const { name } = await User.create(req.body);

    return res.json({ name, email });
  }
}

export default new UserController();
