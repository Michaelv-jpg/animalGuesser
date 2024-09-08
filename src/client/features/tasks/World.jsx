import NorthAmerica1 from "../pictures/NorthAmerica1.png";
import SouthAmerica1 from "../pictures/SouthAmerica1.png";
import Europe1 from "../pictures/Europe1.png";
import Asia1 from "../pictures/Asia1.png";
import Africa1 from "../pictures/africa1.png";
import Austrilia1 from "../pictures/austrilia1.png";
import './styles.css';
import { useState } from 'react'; // Import useState for managing state

function App() {
  const [message, setMessage] = useState(""); // State to store the result message

  // Function to handle click on a continent image
  const handleContinentClick = async (continent) => {
    try {
      // Make sure to use the correct backend URL
      const response = await fetch(`http://localhost:3000/animals/${continent}`);
      
      if (!response.ok) {
        throw new Error("No animals found for this continent");
      }
  
      const animals = await response.json();
      
      if (animals.length > 0) {
        setMessage(`Correct! There are animals found for ${continent}`);
      } else {
        setMessage(`Incorrect! No animals are associated with ${continent}`);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };
  

  return (
    <div>
      <img 
        src={NorthAmerica1} 
        className="continent" 
        onClick={() => handleContinentClick("NorthAmerica")}
        style={{ width: '800px', height: 'auto', position: 'fixed' }}
      />
      <img 
        src={SouthAmerica1} 
        className="continent" 
        onClick={() => handleContinentClick("SouthAmerica")}
        style={{ width: '900px', position: 'fixed', left: 10, top: 350 }}
      />
      <img 
        src={Europe1} 
        className="continent" 
        onClick={() => handleContinentClick("Europe")}
        style={{ width: '880px', height: 'auto', position: 'fixed', right: 580, top: 65 }}
      />
      <img 
        src={Asia1} 
        className="continent" 
        onClick={() => handleContinentClick("Asia")}
        style={{ width: '950px', height: 'auto', position: 'fixed', right: 50, top: 100 }}
      />
      <img 
        src={Africa1} 
        className="continent" 
        onClick={() => handleContinentClick("Africa")}
        style={{ width: '850px', height: 'auto', position: 'fixed', right: 500, top: 500 }}
      />
      <img 
        src={Austrilia1} 
        className="continent" 
        onClick={() => handleContinentClick("Australia")}
        style={{ width: '600px', height: 'auto', position: 'fixed', right: 200, top: 700 }}
      />

      <div className="message">{message}</div> {/* Display the message */}
    </div>
  );
}

export default App;
