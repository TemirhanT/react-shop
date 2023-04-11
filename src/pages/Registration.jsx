import React, {useState, useContext} from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap'
import { Context } from '..';
import {observer} from 'mobx-react-lite'
import {NavLink} from 'react-router-dom'
import { AUTHORIZATION_ROUTE } from '../utils/consts';

const Registration = observer(() => {

  const {user} = useContext(Context)

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div  className={user.theme == 'light' ? 'card-container' : 'card-container dark'}>
      <div className={user.theme == 'light' ? 'card' : 'card dark'}>
        <h4 className='card-title'>Sign up</h4>
          <input required className='card-input' placeholder='email' value={login} onChange={e => setLogin(e.target.value)}/>
          <input required className='card-input' type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button className='card-button' onClick={() => user.registration(login, password)}>Create account!</button>
        <div className={user.theme == 'light' ? 'card-footer' : 'card-footer dark'}>Have account? <NavLink to={AUTHORIZATION_ROUTE}>Sign in!</NavLink></div>
      </div>
    </div>
  );
})

export default Registration;