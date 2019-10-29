import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    const { name } = user;

    return res.json({
      user: {
        name,
        email,
      },
    });
  }
}

export default new SessionController();
