import React, {useState, useContext, useEffect, useRef} from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const SorterMobile = observer(() => {

    const {supplements, user} = useContext(Context);

    return ( 
        <div className={user.theme == 'light' ? 'sorter-container-mobile' : 'sorter-container dark'}>
            <button className={user.theme == 'light' ? 'sorter-item' : 'sorter-item dark'} onClick={() => supplements.filterSupple('value1')}>Filter 1</button>
            <button className={user.theme == 'light' ? 'sorter-item' : 'sorter-item dark'} onClick={() => supplements.filterSupple('value2')}>Filter 2</button>
            <button className={user.theme == 'light' ? 'sorter-item' : 'sorter-item dark'} onClick={() => supplements.filterSupple('value3')}>Filter 3</button>
            <button className={user.theme == 'light' ? 'sorter-item' : 'sorter-item dark'} onClick={() => supplements.resetSupple()}>Show all</button>
            <span className={user.theme == 'light' ? 'sorter-selector-wrapper' : 'sorter-selector-wrapper dark'}>
                Sort
            <select className={user.theme == 'light' ? 'sorter-selector' : 'sorter-selector dark'} onChange={(e) => {supplements.sortSupple(e.currentTarget.value)}}>
                <option className={user.theme == 'light' ? 'sorter-selector-item' : 'sorter-selector-item dark'} value='default'>Default</option>
                <option className={user.theme == 'light' ? 'sorter-selector-item' : 'sorter-selector-item dark'} value='new'>New first</option>
                <option className={user.theme == 'light' ? 'sorter-selector-item' : 'sorter-selector-item dark'} value='old'>Old first</option>
                <option className={user.theme == 'light' ? 'sorter-selector-item' : 'sorter-selector-item dark'} value='cheap'>Cheap first</option>
                <option className={user.theme == 'light' ? 'sorter-selector-item' : 'sorter-selector-item dark'} value='expensive'>Expensive first</option>
            </select>
            </span>
        </div>
     );
})

export default SorterMobile ;