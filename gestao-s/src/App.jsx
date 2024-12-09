import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import imagem from "./Img/destiny.jpg"
import HelloWord from "./components/helloWorld";

function App() {
  {
    /* PARTE PARA ESTUDOS */
  }
  const [count, setCount] = useState(0);
  const name = "francisco";
  const newName = name.toUpperCase();


  {
    /* PARTE PARA ESTUDOS */
  }

  function sum(a, b) {
    return a + b;
  }

  return (
    <>
      <div className="app" >
        {/* PARTE PARA ESTUDOS */}
        <p>olá, {newName}</p>
        <p>soma: {sum(1, 2)}</p>
        {/* <img src={imagem} alt="destiny 2" title="é a imagem do destiny 2"/> */}
        <HelloWord/>
      </div>

      {/* <div>
        //ÁREA DE ESTUDO DO REACT
       
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
