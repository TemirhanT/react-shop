import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '..';


const SupplePage = observer(() => {

    const {basket, supplements, user} = useContext(Context);

    const [supple, setSupple] = useState({info: []});

    const test = () => {
        for (let thing of basket.basket) {
            if(thing.id == supple.id) return true
        }
        return false
    }
    

    const {id} = useParams();
    useEffect(() => {
        supplements.fetchOneSupple(id)
            .then(data => setSupple(data))
            .then(() => supplements.setIsOneSuppleLoading(false))
    }, [])

    return ( 
        
        <div className={user.theme == 'light' ? 'one-supple-body' : 'one-supple-body dark'}>
            {supplements.isOneSuppleLoading 
                ?   
                    <div className='loading-supples'>Loading...</div>
                :
                    <div className="one-supple-wrapper">
                        <div className='one-supple'>
                            <img src='https://www.jaipuriaschoolbahraich.in/wp-content/uploads/2016/11/blank-img.jpg' className='supple-page-img'/>
                            <div className={user.theme == 'light' ? 'one-supple-characs' : 'one-supple-characs dark'}>
                                <h3>Name</h3>
                                <p>Some info</p>
                                <p>Some info</p>
                                <p>Some info</p>
                                <p>Some info</p>
                                <p>Some info</p>
                                <p>Some info</p>
                                {user._isAuth 
                                    ? 
                                        test()
                                            ? 
                                                <h4>Added in basket<img src='https://cdn-icons-png.flaticon.com/512/4225/4225683.png'/></h4>
                                            :
                                                <button onClick={() => basket.setBasket(supple)}>Добавить в корзину</button>
                                    :
                                        <></>
                                }
                            </div>
                        </div>
                        <div className={user.theme == 'light' ? 'one-supple-description' : 'one-supple-description dark'}>
                            <h3>Description</h3>
                            <p>{supple.body}</p>
                        </div>
                    </div>
            }
        </div>
     );
})

export default SupplePage ;