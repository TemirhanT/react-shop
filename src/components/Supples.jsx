import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { SUPPLE_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom'




const Supples = observer(() => {

    const {supplements, user} = useContext(Context);
    const navigate = useNavigate();

    return (
        <>{supplements.areSupplesLoading 
                ? 
        <div className='loading-supples'>Loading...</div>
                :
            <div className='supples-wrapper'> {supplements.supples.map(supple =>
            <div className={user.theme == 'light' ? 'supple' : 'supple dark'} key={supple.id} style={{display: 'flex', flexDirection: 'column', margin: 20, cursor: 'pointer'}} onClick={() => navigate(SUPPLE_ROUTE + '/' + supple.id)}>
            <img className='supple-img' src='https://www.jaipuriaschoolbahraich.in/wp-content/uploads/2016/11/blank-img.jpg'/>
            <span>{supple.title}<br/> {supple.id}</span>
            </div>
            )}</div>
        } </>
    )
 })
  
 export default Supples;