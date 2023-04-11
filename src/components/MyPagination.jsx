 import React, { useContext } from 'react';
 import { observer } from 'mobx-react-lite';
 import { Context } from '..';


const MyPagination = observer(() => {

    const {supplements, user} = useContext(Context);
    const pageCount = Math.ceil(supplements.totalCount/supplements.limit);
    const pages = [];
    for(let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return ( 
        <div className='pagination-wrapper'>
            {pages.map(page => 
                <div className={user.theme == 'light' ? 'pagination-item' : 'pagination-item dark'} 
                    onClick={() => {supplements.setPage(page); console.log(supplements.page)}}
                    key={page}>
                        {page}
                </div>
            )}
        </div>
    );
})
  
export default MyPagination;