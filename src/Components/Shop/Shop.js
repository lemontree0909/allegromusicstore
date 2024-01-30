import { useState } from 'react';
import '../../App.css';
import AllCategories from '../../Components/Filter/AllCategories';
import Instruments from '../../Components/InstrumentsComponents/Instruments';
import Search from '../Filter/Search';


function Shop() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <div className="search-container">
        <Search setSearchValue={setSearchValue}/>
      </div>

      <div>
        <AllCategories/>
      </div>

      <div className='products'>
        <Instruments searchValue={searchValue}/>
      </div>

    </div>
  );
}

export default Shop;