import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import CarouselComp from '../components/CarouselComp'
import Sorter from '../components/Sorter';
import { observer } from 'mobx-react-lite';
import MyPagination from '../components/MyPagination';
import Searcher from '../components/Searcher';
import Supples from '../components/Supples';
import Counter from '../components/Counter';
import SorterMobile from '../components/SorterMobile';

const MainPage = observer(() => {


  const {supplements, user} = useContext(Context);
  const [width, setWidth] = useState(window.innerWidth)
  const [isActive, setIsActive] = useState(false)

  

  useEffect(() => {
    user.checkAuth()

    const updateWindowWidth = () => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth)
    }
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [])

  useEffect(() => {
    supplements.setAreSupplesLoading(true);
    supplements.fetchSupplesPage()
      .then((data) => {
        supplements.setSupples(data);
        supplements.setAreSupplesLoading(false)
      })
  }, [supplements.page]);


  return (
    <div className={user.theme == 'light' ? 'body' : 'body dark'}>
      <div className='main_container'>
        <CarouselComp/>
        <Searcher/>
        {width <= 1000 && 
              <>
                <div className='sorter-open' onClick={() => setIsActive(!isActive)}><img src='https://static.thenounproject.com/png/356889-200.png'/><h3>Filters</h3></div>
                {isActive && <div className='sorter-mobile'><SorterMobile/></div>}
              </>}
        <div className='supples-container'>
          {width > 1000 && <Sorter/>}
          <div>
            <Counter/>
            <Supples/>
          </div>
        </div>
        <MyPagination/>
      </div>
    </div>
  );
})

export default MainPage;
