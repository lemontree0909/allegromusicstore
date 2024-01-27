import '../../App.css';
import AllCategories from '../../Components/Filter/AllCategories';
import Instruments from '../../Components/InstrumentsComponents/Instruments';


function Shop() {
  return (
    <div>

      <div>
        <AllCategories/>
      </div>

      <div className='products'>
        <Instruments/>
      </div>

    </div>
  );
}

export default Shop;