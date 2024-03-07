import React, { useState, useContext } from 'react';
import { useForm, reset } from 'react-hook-form';
import { UserContext } from '../../../context/user';
import { useTranslation } from 'next-i18next';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import NextImage from "../Image"
function AccountSettings() {
  const { doRegister } = useContext(UserContext);
  const { t: translate } = useTranslation('common');
  const [value, setValue] = useState();
  const {

    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = {};
  password.current = watch('password', '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(['', '']);

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    const ret = await doRegister(values);

    if (ret[0] === 'alert') {
      setAlert(ret);
    }
    else if (ret[0] === 'OK') {
      setAlert(<div className="alert alert-success" role="alert">Successfuly registred</div>);
    }
    else {
      setAlert(ret);

      reset();
    }
    setIsSubmitting(false);
  };
  return (
    <>
      <div class="container register-form-inline">

        <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
 
          
          <div className='d-flex part1'>
            <div className=''>
            <div className="floating-label">

<input id="username"
  type="text"
  {...register('username', {
    required: 'Please choose a username',
  })}
  placeholder={translate('username')}
/>
{errors.username && <p className='text-danger'>{errors.username.message}</p>}
<label htmlFor="username" className='label'> {translate('username')}</label>
</div>
<div className="floating-label">

<input
  type="email"

  id="email"
  {...register('email', {
    required: 'Email is required',
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  })}
  placeholder="you@email.com"
/>
{errors.email && <p className='text-danger'>{errors.email.message}</p>}
<label htmlFor="email" className='label'>{translate('email')}</label>
</div>
            </div>
           <div className=''>
           <div className="floating-label">
            <input type="password" id="floatingPassword" placeholder="Password"
              {...register('password', {
                required: 'You must specify a password',
                minLength: { value: 8, message: 'At least 8 character' },
              })}
            />
            {errors.password && <p className='text-danger'> {errors.password.message}</p>}
            <label className='label' htmlFor="floatingPassword">{translate('password')}</label>
          </div>


          <div className="floating-label">

            <input id="confpassword"
              type="password"
              {...register('repeatpassword', {
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              })}

              placeholder={translate('passwordConf')}
            />
            {errors.repeatpassword && <p className='text-danger'>{errors.repeatpassword.message}</p>}
            <label htmlFor="confpassword" className='label'>  {translate('passwordConf')}</label>
          </div>

            </div>
          </div>


       

           
<div className='d-fles part1'>
  
  
  <button
            type="submit"
            className=" register-btn mt-4"
            disabled={isSubmitting}
          > 
            {isSubmitting && 'Registering...'}
            {!isSubmitting && translate("signNow")}
          </button>

          {alert}
  
</div>

         
        

        </form>
      </div>

    </>

  );
}

export default AccountSettings