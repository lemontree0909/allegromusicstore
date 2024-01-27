import { useState } from 'react';
import '../../App.css';
import AllCategories from '../../Components/Filter/AllCategories';
import Instruments from '../../Components/InstrumentsComponents/Instruments';
import dataInstruments from '../../data/dataInstruments';
import Search from '../Filter/Search';


function Shop() {

  const [instrument, setInstrument] = useState(dataInstruments);

  return (
    <div>
      <div className="search-container">
        <Search dataInstruments={dataInstruments}
                setInstrument={setInstrument}/>
      </div>

      <div>
        <AllCategories/>
      </div>

      <div className='products'>
        <Instruments instrument={instrument}/>
      </div>

    </div>
  );
}

export default Shop;