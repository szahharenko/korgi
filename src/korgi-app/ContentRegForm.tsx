import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { postData, GA, smoothScroll } from '../tools/tools';
import { API } from '../models/models';
import { UserSubmitForm, UserFormResponse, ResponseStatus, CONTENT }  from '../models/models'
import RegSuccess from './ContentRegSuccess';
import RegFailed from './ContentRegFailed';
import RegPrize from './ContentRegPrize';
import RegInvalid from './ContentRegInvalid';

const RegForm: React.FC = () => {

  const [currentContent, setContent] = useState<CONTENT>(CONTENT.REGISTER);

  const handleRegResult = (resp: UserFormResponse) : void => {
    if(resp.result === ResponseStatus.REG_SUCCESS) {
      setContent(CONTENT.REGISTER_SUCCESS);
    }
    if(resp.result === ResponseStatus.CODE_USED) {
      setContent(CONTENT.CODE_USED);
    }
    if(resp.result === ResponseStatus.REG_WON) {
      setContent(CONTENT.WON_PRIZE);
    }
    if(resp.result === ResponseStatus.DONT_EXIST) {
      setContent(CONTENT.DONT_EXIST);
    }
  }

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('Kohustuslik'),
    lastname: Yup.string().required('Kohustuslik'),
    email: Yup.string().required('Kohustuslik').email('Vale vorming'),
    phoneNumber: Yup.number().typeError('Vale vorming').required('Kohustuslik'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    code: Yup.string().trim().matches(/^(?=(?:.{6}|.{10})$)[A-z0-9]*$/gm , 'Vale vorming').required('Kohustuslik')
  });

  const { register, handleSubmit, formState: { errors } } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const handleError = () => {
    alert('Midagi läks valesti :(')
    GA('event', 'register_error');
  }

  const tryAgain = () => {
    setContent(CONTENT.REGISTER);
  }
  const logEvents = {
    0: 'register_code_used',
    1: 'register_success',
    2: 'register_won',
    3: 'register_code_do_not_exist'
  }
  const handleFormSubmit = (data: UserSubmitForm) => {
    GA('event', 'register_start');
    postData(API, {...data, ...{action: 'register'}})
      .then((resp: UserFormResponse) => {
        GA('event', logEvents[resp.result]);
        handleRegResult(resp);
      })
      .catch(() => handleError())
  }

  return (
    <div className={`result ${currentContent === CONTENT.REGISTER ? 'registration' : 'reveal'}`}>
      <form onSubmit={handleSubmit((data: UserSubmitForm) => handleFormSubmit(data))} method="post">
        <div className='fields'>
          <div className="double-row">
            <div className='form-field'>
              <input type="text" {...register('firstname')} className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} placeholder='Eesnimi' />
              { errors.firstname && <span className='error-message'>{errors.firstname.message}</span>}
            </div>
            <div className='form-field'>
              <input type="text" {...register('lastname')} className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} placeholder='Perenimi' />
              { errors.lastname && <span className='error-message'>{errors.lastname.message}</span>}
            </div>
          </div>
          <div className='form-field'>
            <input type="tel" {...register('phoneNumber')} className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} placeholder='Telefoninumber' />
            { errors.phoneNumber && <span className='error-message'>{errors.phoneNumber.message}</span>}
          </div>
          <div className='form-field'>
            <input type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder='E-post' />
            { errors.email && <span className='error-message'>{errors.email.message}</span>}
          </div>
          <div className='form-field'>
            <input maxLength={10}  type="text" {...register('code')} className={`form-control ${errors.code ? 'is-invalid' : ''}`} placeholder='Korgi all olev kood' />
            { errors.code && <span className='error-message'>{errors.code.message}</span>}
          </div>
          <label className='checkbox'>
            <input type={'checkbox'} {...register('acceptTerms')} className={`form-control ${errors.acceptTerms ? 'is-invalid' : ''}`} />
            <span></span>
            <span>
              Nõustun kampaania <a href="#n" onClick={e => smoothScroll(e, 'rules')} >tingimustega</a>
            </span>
          </label>
          <div className='form-submit'>
            <button>OSALEN LOOSIMISES</button>
          </div>
        </div>
        { currentContent === CONTENT.REGISTER_SUCCESS && <RegSuccess buttonAction={tryAgain}></RegSuccess> }
        { currentContent === CONTENT.CODE_USED && <RegFailed buttonAction={tryAgain}></RegFailed> }
        { currentContent === CONTENT.WON_PRIZE && <RegPrize buttonAction={tryAgain} prizeNumber={1}></RegPrize> }
        { currentContent === CONTENT.DONT_EXIST && <RegInvalid buttonAction={tryAgain}></RegInvalid> }

      </form>
      <div className='caps-info'>
        Koodi leiad <span>punase</span> korgi alt
        <span className='caps'></span>
      </div>
    </div>
  );
}

export default RegForm;