
import NorthAmerica from "../pictures/NorthAmerica.png"
import SouthAmerica from "../pictures/SouthAmerica.png"
import Europe from "../pictures/Europe.png"
import Asia from "../pictures/Asia.png"
import africa from "../pictures/africa.png"
import austrilia from "../pictures/austrilia.png"

function App() {
  return (
    <div>
      <img src={NorthAmerica} style={{ width: '800px', height: 'auto', position: 'fixed', filter:'hue-rotate(180deg)' }}/>
      <img src={SouthAmerica} style={{ width: '800px', position: 'fixed',  left: 35, top: 350, filter:  'hue-rotate(180deg)' }}/>
      <img src={Europe} style={{ width: '850px', height: 'auto', position: 'fixed', right: 580, top: 65, filter:  'hue-rotate(180deg)' }}/>
      <img src={Asia} style={{ width: '800px', height: 'auto', position: 'fixed', right: 50, top: 100, filter: 'hue-rotate(180deg)' }}/>
      <img src={africa} style={{ width: '850px', height: 'auto', position: 'fixed', right: 500, top: 500, filter: 'hue-rotate(180deg)' }}/>
        <img src={austrilia} style={{ width: '300px', height: 'auto', position: 'fixed', right: 200, top: 800, filter: 'hue-rotate(180deg)' }}/>
    </div>
  );
}

export default App;