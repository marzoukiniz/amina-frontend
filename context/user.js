
import { useState, createContext } from 'react';
export const UserContext = createContext(null);
import { linstance, instance } from "../src/utils/api";
import { useRouter } from 'next/router';
 

const UserProvider = ({ children }) => {
  const router = useRouter()
  async function doLogin(values) {
    var ret = ['niente'];
    try {
      const resp = await linstance.post('/api/auth/login', values);
      return resp.data;
    } catch (error) {
      return ['alert', error.response.data.message];
    }
  }

  async function doReset(values) {
    try {
      const resp = await linstance.post('/api/auth/reset', values);
      return ['OK', resp.data.message];
    } catch (error) {
      return ['alert', error.response.data.message];
    }
  }

  async function doRemind(values) {
    try {
      const resp = await linstance.post('/api/auth/reminder', values);
      return ['OK', resp.data.message];
    } catch (error) {
      return ['alert', error.response.data.message];
    }
  }

 

  

  async function doRegister(values) {
    var ret = ['niente'];
    try {
      const resp = await linstance.post('/api/auth/register', values);
      return ['OK', resp.data.message];
    } catch (error) {
      return ['alert', error.response.data.message];
    }
  }
  const doLogout = async () => {
    const resp = await linstance.post('/api/auth/logout', {
      method: 'POST',
    });
    if (resp.data.message == 'success') {
      setUser('');
      setEmail('');
      setId('');
    }
  }

  async function checkLogin() {
    try {
      const resp = await linstance.get('/api/auth/user');
      setUser(resp.data.username);
      setEmail(resp.data.email);
      setId(resp.data.id); 
      return resp;
    } catch (error) {
      return error.response;
    }
  }

  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [jwt, setJwt] = useState();
  const [loggingIn, setLoggingIn] = useState(false);
  const useract = {
    user: user,
    setUser: setUser,
    loggingIn: loggingIn,
    doLogout: doLogout,
    doLogin: doLogin,
    setLoggingIn: setLoggingIn,
    checkLogin: checkLogin,
    jwt: jwt,
    setJwt: setJwt,
    email: email,
    setEmail: setEmail,
    id: id,
    setId: setId,
    doRegister: doRegister,
    doRemind: doRemind,
    doReset: doReset,
  };
  return (
    <UserContext.Provider value={useract}>{children}</UserContext.Provider>
  );
};

export default UserProvider;