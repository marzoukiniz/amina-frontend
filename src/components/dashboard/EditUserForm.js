import React, { useState, useContext } from 'react';
import { useForm, reset } from 'react-hook-form';
import { UserContext } from '../../../context/user';
import { useTranslation } from 'next-i18next';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import NextImage from "../Image"
function EditUserForm() {
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

            <div className='profile-img'>
              <p className='upload-title'>{translate('profileImg')}</p>
              <div className='upload-img'>

                <svg viewBox="0 0 24 24"><path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z" fill="rgba(202,210,223,1)"></path></svg>
              </div>
            </div>


            <div className='personal-info'>

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
              <div class="floating-label">
                <input id="country"
                  type="text"
                  {...register('country', {
                    required: 'Please input your country',
                    minLength: { value: 8, message: 'At least 8 character' },
                  })}

                  placeholder={translate('country')}
                />
                {errors.country && <p className='text-danger'> {errors.country.message}</p>}
                <label htmlFor="country" className='label'>{translate('country')}</label>
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

export default EditUserForm