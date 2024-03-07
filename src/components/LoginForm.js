import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../context/user';
import {useTranslation } from 'next-i18next'; 

function LoginForm() {
  const { t: translate} = useTranslation('common');
  const { handleSubmit, register, } = useForm();

  const [alert, setAlert] = useState(['', '']);


  const { setUser, doLogin, loggingIn, setLoggingIn } =
    useContext(UserContext);

  const onSubmit = async (values) => {
    setLoggingIn(true);
    const ret = await doLogin(values);

    if (ret[0] == 'alert') {
      setAlert(ret);
    } else {
      
      setAlert(<div className="alert alert-success" role="alert">Successfuly logged in</div>);
      setUser(ret.message.username);
    }
    setLoggingIn(false);
  };
  return (


    <section className="signup-form">
      <div className='form_wrapper'>
        <div className="form_wrap">
          <div className="form_fild login_form">
            <h1 className="text-2xl mb-4">{translate('welcomeB')}</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="w-96">
              <div className="grid grid-cols-1 gap-6">

                <div className="input_group">
                  <label>
                    {translate('username')}
                  </label>
                  <input autoComplete="username"
                    type="text" className="input" placeholder={translate('username')}   {...register('identifier', {
                      required: true,
                    })} />
                </div>
                <div className="input_group">
                  <label>{translate('password')}</label>
                  <input
                    autoComplete="current-password"
                    type="password"
                    {...register('password', {
                      required: true,
                    })}
                    className="input"
                  />
                </div>
                <button
                  type="submit"
                  className="form-btn"
                  disabled={loggingIn}
                >
                  {loggingIn && 'Logging in...'}
                  {!loggingIn && 'Login'}
                </button>


              </div>
              {alert[1]}
              {alert}
            </form>
            <div>
        <a href="/user/forgotpassword">Forgot password?</a>
      </div>

          </div>
        </div>
      </div>
    </section>



    // <a href="/user/forgotpassword">Forgot password?</a>

  );
}

export default LoginForm;