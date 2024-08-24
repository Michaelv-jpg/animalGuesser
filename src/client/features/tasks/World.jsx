
import NorthAmerica1 from "../pictures/NorthAmerica1.png"
import SouthAmerica1 from "../pictures/SouthAmerica1.png"
import Europe1 from "../pictures/Europe1.png"
import Asia1 from "../pictures/Asia1.png"
import Africa1 from "../pictures/africa1.png"
import Austrilia1 from "../pictures/austrilia1.png"
import './styles.css'

//* This file controls all the contients, australia is also mispelled */



function App() {
  return (
    <div>
      <img src={NorthAmerica1} className="continent" style={{ width: '800px', height: 'auto', position: 'fixed',  }}/>
      <img src={SouthAmerica1} className="continent" style={{ width: '800px', position: 'fixed',  left: 35, top: 350,    }}/>
      <img src={Europe1} className="continent" style={{ width: '850px', height: 'auto', position: 'fixed', right: 580, top: 65,  }}/>
      <img src={Asia1} className="continent" style={{ width: '950px', height: 'auto', position: 'fixed', right: 50, top: 100, }}/>
      <img src={Africa1} className="continent" style={{ width: '850px', height: 'auto', position: 'fixed', right: 500, top: 500,  }}/>
        <img src={Austrilia1} className="continent" style={{ width: '300px', height: 'auto', position: 'fixed', right: 200, top: 800,  }}/>
    </div>
  );
}

export default App;