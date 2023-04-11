import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '..';

const Account = observer(() => {

    const {user} = useContext(Context);


    return ( 
        <>
            <div className={user.theme == 'light' ? 'account-body' : 'account-body dark'}>
                <div className="account-container">
                    <div className='account-upper-part'>
                        <img className='account-img' src='https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'/>
                        <div className='account-upper-part-info'>
                            <p>Username: {user._user.username}</p>
                            <p>ID: {user._user.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})
 
export default Account;