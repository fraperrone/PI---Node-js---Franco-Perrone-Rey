import * as AuthService from '../services/auth.service.js';

export const login = async (req, res) => {
  try {
    const { token } = await AuthService.login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};