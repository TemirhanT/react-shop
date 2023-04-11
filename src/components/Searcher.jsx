import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';

 const Searcher = () => {

    const {user, supplements} = useContext(Context) 

    const [search, setSearch] = useState('');

    useEffect(() => {
        supplements.filterSearch(search);
    }, [search])

    return ( 
        <div className={user.theme == 'light' ? 'searcher-container' : 'searcher-container dark'}>
            <input className='searcher' id='searcher' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <label htmlFor='searcher'><img src='https://www.pngall.com/wp-content/uploads/8/Vector-Search.png'/></label>
        </div>
     );
 }
  
 export default Searcher;