import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';

const Counter = observer(() => {

    const {supplements} = useContext(Context)

    return ( 
        <>
        {!supplements.areSupplesLoading 
                ?
            <span className='supples-counter'>
                {supplements.limit*supplements.page > supplements.totalCount 
                        ? 
                    supplements.totalCount 
                        : 
                    supplements.limit*supplements.page} of {supplements.totalCount}
            </span>
                :
            <div></div>
        }
        </>
    )
})
 
export default Counter;