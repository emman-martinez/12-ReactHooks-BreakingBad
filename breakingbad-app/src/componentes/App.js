import React, { useState, useEffect } from 'react';
import Imagen from './Imagen';
import './../css/App.css';

function App() {
  return (
    <div className="App"> 
      <p>Hola</p>
      <Imagen></Imagen>
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
