import React, { useState, useContext } from 'react';
import { useForm, reset } from 'react-hook-form';
import { UserContext } from '../../context/user';
import { useTranslation } from 'next-i18next';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import NextImage from "./Image"
import { allcountries } from '../data/allcountries';
import { useRouter } from 'next/router'
function registerForm() {
  const { locale } = useRouter();
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

          <div className='form-section-title'>{translate('personalInfo')}</div>

          <div className='d-flex part1'>
          <div className=''>

<div class="floating-label">

  <input id="fullName"
    type="text"
    {...register('fullname', {
      required: 'Please type your fullname',
    })}
    placeholder={translate('fullName')}
  />
  {errors.fullname && <p className='text-danger'>{errors.fullname.message}</p>}
  <label class="label" for="fullName">{translate('fullName')}</label>

</div>
<div class="floating-label">

  <input id="dob"
    type="text"

    {...register('dob', {
      required: 'date of birth is required',

    })}
    placeholder={translate('dob')}
  />
  {errors.dob && <p className='text-danger'>{errors.dob.message}</p>}
  <label htmlFor="dob" className='label'>{translate('dob')}</label>
</div>
 
 
</div>


            <div className=''>
            <div className="form-floating mb-4">
            <select id="gfg" className="form-select">
                <option value="mr">{translate('mr')}</option>
                <option value="mrs">{translate('mrs')}</option>
                <option value="cheikh">{translate('cheikh')}</option>
                <option value="cheikha">{translate('cheikha')}</option>
                
            </select>
            <label for="gfg">Title</label>
        </div>
             
              <div class="form-floating mb-4">
                <select className="form-select"   {...register('country', {
                  required: 'Please select your country',
                })}>
                  {allcountries.map((country, id) => (
                    <option
                      key={id}>
                        
                        {locale === 'ar' ? country.ar : country.en}
                     
                    </option>
                  ))}
                </select>
                {errors.country && <p className='text-danger'> {errors.country.message}</p>}
                <label htmlFor="country"  >{translate('country')}</label>
              </div>
              
              <div className="mobile-input  ">
                <label htmlFor="mob" className='label'>  {translate('mobileNo')}</label>
                <PhoneInputWithCountry
                  name="phoneInputWithCountrySelect"
                  control={control}
                  defaultCountry="QA"
                  value={value}
                  rules={{ required: true }} />

                {errors.mobileNo && <p className='text-danger'>{errors.mobileNo.message}</p>}

              </div>
            </div>
          </div>
          <div className='form-section-title'>{translate('accountInfo')}</div>
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




          <div className='form-section-title'> {translate('tandc')}</div>
          <div className='d-flex part1 align-center'>
            <div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  {translate('tandcDesc')}
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  {translate('tandcDesc2')}
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  {translate('tandcDesc3')}
                </label>
              </div>

            </div>
            <div>
              <button
                type="submit"
                className=" register-btn"
                disabled={isSubmitting}
              >
                {isSubmitting && 'Registering...'}
                {!isSubmitting && translate("signNow")}
              </button>

              {alert}
            </div>
          </div>




        </form>
      </div>

    </>

  );
}

export default registerForm