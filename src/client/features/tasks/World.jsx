
import NorthAmerica1 from "../pictures/NorthAmerica1.png"
import SouthAmerica1 from "../pictures/SouthAmerica1.png"
import Europe1 from "../pictures/Europe1.png"
import Asia1 from "../pictures/Asia1.png"
import Africa1 from "../pictures/africa1.png"
import Austrilia1 from "../pictures/austrilia1.png"
//* This file controls all the contients, australia is also mispelled */
function App() {
  return (
    <div>
      <img src={NorthAmerica1} style={{ width: '800px', height: 'auto', position: 'fixed', filter:'hue-rotate(180deg)' }}/>
      <img src={SouthAmerica1} style={{ width: '800px', position: 'fixed',  left: 35, top: 350, filter:  'hue-rotate(180deg)' }}/>
      <img src={Europe1} style={{ width: '850px', height: 'auto', position: 'fixed', right: 580, top: 65, filter:  'hue-rotate(180deg)' }}/>
      <img src={Asia1} style={{ width: '800px', height: 'auto', position: 'fixed', right: 50, top: 100, filter: 'hue-rotate(180deg)' }}/>
      <img src={Africa1} style={{ width: '850px', height: 'auto', position: 'fixed', right: 500, top: 500, filter: 'hue-rotate(180deg)' }}/>
        <img src={Austrilia1} style={{ width: '300px', height: 'auto', position: 'fixed', right: 200, top: 800, filter: 'hue-rotate(180deg)' }}/>
    </div>
  );
}

export default App;