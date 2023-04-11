import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import { Context } from '..';

const Basket = observer(() => {

  const {basket, user} = useContext(Context);

  return (
    <div className={user.theme == 'light' ? 'one-supple-body' : 'one-supple-body dark'}>
        {basket.basket.map(supple => 
          <div key={supple.id} className="one-supple-wrapper">
            <div className="one-supple">
              <img src='https://www.jaipuriaschoolbahraich.in/wp-content/uploads/2016/11/blank-img.jpg' className='basket-img'/>
              <span className={user.theme == 'light' ? 'one-supple-basket-characs' : 'one-supple-basket-characs dark'}>
                <h5>{supple.title}</h5>
                <br></br>
                {supple.body}
                <button onClick={() => basket.deleteBasket(supple.id)}>Remove from basket</button>
              </span>
            </div>
          </div>  
        )}
    </div>
  );
})

export default Basket;