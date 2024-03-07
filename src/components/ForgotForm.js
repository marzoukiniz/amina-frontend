import React, { useState, useContext } from 'react';
import { useForm, reset } from 'react-hook-form';
import { UserContext } from '../../context/user';

const ForgotForm = () => {
  const { doRemind } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(['', '']);
  const onSubmit = async (values) => {
    setIsSubmitting(true);
    const ret = await doRemind(values);
    if (ret[0] === 'alert') {
      setAlert(ret);
    } else {
      setAlert([
        '',
        `Please check your email (${values.email}) and follow the instructions to reset your password`,
      ]);
      reset();
    }
    setIsSubmitting(false);
  };
  return (
    <main>
      <h3 className="text-2xl mb-4">Forgot your password?</h3>
      <p className="mb-4">Insert your email address to reset your password</p>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="input_group">
          <label className="block">
            Email address</label>
            <input
              type="email"
              className="input"
              {...register('email', {
                required: 'Email is required',
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder="you@email.com"
            />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          
         
        </div>
        <button
            type="submit"
            className="send-btn disabled"
            disabled={isSubmitting}
          >
            {isSubmitting && 'Sending...'}
            {!isSubmitting && 'Send'}
          </button>
        {alert[1]}
      </form>
    </main>
  );
};

export default ForgotForm;