import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/App.css';
import Frase from './Frase';
// import Imagen from './Imagen';


function App() {

  const [frase, obtenerFrase] = useState({});
  // console.log(frase);

  const consultarAPI = async () => {
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      // console.log(resultado.data[0]);
      
      // ***** Agregar el resultado de la API al state (similar a this.setState)
      obtenerFrase(resultado.data[0]);
  }

  // ***** Consulta a una Rest API
  useEffect(
    () => {
      consultarAPI()
    }, []
  )

  console.log(frase); // frase = this.state

  return (
    <div className="App contenedor"> 
      <Frase
                frase={frase}
      ></Frase>
      <button
        onClick={consultarAPI}
      >Generar Nueva</button>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return(
//       <div className="App App-header">
//         <img src={logoBb} className="App-logo" alt="logo" />
//         <Imagen></Imagen>
//       </div>
//     )
//   }
// }

export default App;
