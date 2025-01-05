import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'supersecret';
const expiration = '2h';

export const signToken = (user: any) => {
  const payload = { _id: user._id, email: user.email, username: user.username };
  return jwt.sign(payload, secret, { expiresIn: expiration });
};

export default (req: any) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return { user: null };

  try {
    const decoded = jwt.verify(token, secret);
    return { user: decoded };
  } catch {
    return { user: null };
  }
};
