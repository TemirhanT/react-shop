import React, {useState, useContext, useRef} from 'react';
import { Context } from '..';
import {observer} from 'mobx-react-lite'
import {NavLink} from 'react-router-dom'
import { REGISTRATION_ROUTES } from '../utils/consts';

const Authorization = observer(() => {

  const {user} = useContext(Context)

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div  className={user.theme == 'light' ? 'card-container' : 'card-container dark'}>
      <div className={user.theme == 'light' ? 'card' : 'card dark'}>
        <h4 className='card-title'>Sign in</h4>
          <input required className='card-input' placeholder='email' value={login} onChange={e => setLogin(e.target.value)}/>
          <input required className='card-input' type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button className='card-button' onClick={() => user.auth(login, password)}>Log in!</button>
        <div className={user.theme == 'light' ? 'card-footer' : 'card-footer dark'}>Don't have account? <NavLink to={REGISTRATION_ROUTES}>Sign up!</NavLink></div>
      </div>
    </div>
  );
})

export default Authorization;


