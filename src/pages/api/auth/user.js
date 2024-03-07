import axios from '../../../utils/api';
import cookie from 'cookie';
//API Route to check the user status in, get user data from cookies

export default async (req, res) => {
  if (req.method === 'GET') {
    const { token } = cookie.parse(req.headers.cookie);
    if (!token) {
      res.status(403).json({ message: 'not authorized' });
    }
    await axios
      .get('api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        res.status(200).json({
          user: response.data.username,
        
          email: response.data.email,
          id: response.data.id,
        });
      })
      .catch((error) => {
        res.status(403).json({ message: 'not authorized' });
      });
   
  }
};