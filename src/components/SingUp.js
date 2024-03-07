import { useRouter } from 'next/router';
import NextImage from "./Image"
import {useTranslation } from 'next-i18next'; 
export default function SingUp() {
  const router = useRouter();
  const { locale,locales, push } = router;
  const { t: translate} = useTranslation('common');
  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="true">
                    {translate('login')}
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="portfolio-tab" data-bs-toggle="tab" data-bs-target="#portfolio" type="button" role="tab" aria-controls="portfolio" aria-selected="false">
                    {translate('signup')}
                      </button>
                  </li>

                </ul>
                
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                    <section class="signup-form">
                      <div className='form_wrapper'>
                        <div class="form_wrap">
                          <div class="form_fild login_form">
                            <h2>{translate('welcomeB')}</h2>
                            <div class="input_group">
                              <label> 
                                {translate('username')}
                              </label>
                              <input type="email" class="input" placeholder=  {translate('username')} />
                            </div>
                            <div class="input_group">
                              <label>{translate('password')}</label>
                              <input type="password" class="input" placeholder={translate('password')} />
                            </div>

                            <a href="#forgot" class="forgot">{translate('Forgotpassword')}</a>

                            <input type="submit" class="form-btn" value={translate('login')}  onClick={() => router.push('/dashboard')} />

                            <div class="not_mem">
                              <label for="signup">{translate('notMember')} <span> {translate('signNow')}</span></label>
                            </div>

                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div class="tab-pane fade" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
                    <section class="signup-form">
                      <div className='form_wrapper'>
                        <div class="form_wrap">
                          <div class="form_fild signup_form">
                            <div className='row'>
                              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div class="input_group">
                                  <label >First Name</label>
                                  <input type="text" class="input" placeholder="First name" />
                                </div>
                                <div class="input_group">
                                  <label>Date Of Birth</label>
                                  <input type="date" class="input" placeholder="10-04-1990" />
                                </div>

                                <div class="input_group">
                                  <label>Nationality</label>
                                  <select class="form-select" aria-label="Default select example">
                                    <option selected>---</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div class="input_group">
                                  <label>Marital status</label>
                                  <select class="form-select" aria-label="Default select example">
                                    <option selected>---</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div class="input_group">
                                  <label >Mobile Number</label>
                                  <input type="text" class="input" placeholder="00-00-00" />
                                </div>


                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div class="input_group">
                                  <label >Last Name</label>
                                  <input type="text" class="input" placeholder="last name" />
                                </div>
                                <div class="input_group">
                                  <label>Gender</label>
                                  <select class="form-select" aria-label="Default select example">
                                    <option selected>---</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>


                                <div class="input_group">
                                  <label >Email</label>
                                  <input type="text" class="input" placeholder="user@printemps.com" />
                                </div>
                                <div class="input_group">
                                  <label>Password</label>
                                  <input type="password" class="input" placeholder="Password" />
                                </div>
                                <div class="input_group">
                                  <label>Confirm Password</label>
                                  <input type="password" class="input" placeholder="Confirm Password" />
                                </div>


                              </div>
                            </div>
                            <div className='row'>
                              <div className='col-lg-12 col-md-12 col-sm-12 right-btn'>
                                <input type="submit" class="form-btn" value="Signup" />
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                </div>
    </div>
  );
}