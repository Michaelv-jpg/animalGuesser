
import NorthAmerica from "../pictures/NorthAmerica.png"
import SouthAmerica from "../pictures/SouthAmerica.png"
import Europe from "../pictures/Europe.png"
import Asia from "../pictures/Asia.png"
import africa from "../pictures/africa.png"
import austrilia from "../pictures/austrilia.png"

function App() {
  return (
    <div>
      <img src={NorthAmerica} style={{ width: '800px', height: 'auto', position: 'fixed' }}/>
      <img src={SouthAmerica} style={{ width: '800px', position: 'fixed',  left: 35, top: 350 }}/>
      <img src={Europe} style={{ width: '650px', height: 'auto', position: 'fixed', right: 640, top: 65, }}/>
      <img src={Asia} style={{ width: '800px', height: 'auto', position: 'fixed', right: 50, top: 100, }}/>
      <img src={africa} style={{ width: '600px', height: 'auto', position: 'fixed', right: 550, top: 500, }}/>
        <img src={austrilia} style={{ width: '300px', height: 'auto', position: 'fixed', right: 200, top: 800, }}/>
    </div>
  );
}

export default App;