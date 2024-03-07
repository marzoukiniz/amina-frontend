import { useContext } from 'react';
import { UserContext } from '../../context/user';
import { useTranslation } from 'next-i18next';

function Logout() {
  const { doLogout } = useContext(UserContext);
  const { t: translate } = useTranslation('common');
  return <span onClick={() => doLogout()}  >  
  <svg  className='logout-icon' viewBox="0 0 24 24"><path d="M2.80777 1.39355L22.6068 21.1925L21.1925 22.6068L17.5846 18.9996L6.45516 19.0002L2.00016 22.5002V4.00016C2.00016 3.83085 2.04223 3.67138 2.11649 3.53162L1.39355 2.80777L2.80777 1.39355ZM3.99955 5.41355L4.00016 18.3855L5.76349 17.0002L15.5846 16.9996L3.99955 5.41355ZM21.0002 3.00016C21.5524 3.00016 22.0002 3.44787 22.0002 4.00016V17.7852L20.0002 15.7852V5.00016L9.21316 4.99916L7.21416 3.00016H21.0002Z" fill="#57667d"></path></svg>
  {translate('logout')}
</span>;
}

export default Logout;