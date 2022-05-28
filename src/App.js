//Hooks
import { useEffect, useState } from "react";
//CSS
import './App.css';
//Components
import Carossel from "./components/Carossel"
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Carrossel-React/static/shoes.json")
      .then((response) => response.json()).then(setData)


  }, [])

  if (!data || !data.length) return null

  return (



    <div className="App">
      <h1> CARROSSEL REACT</h1>
      <Carossel data={data} />
    </div>
  );
}

export default App;
