import logo from './logo.svg';
import './App.css';

import Titulo from './components/Titulo/Titulo';
import Leader from './components/Leader/Leader';
import Developers from './components/Developers';
import Footer from './components/Footer/Footer';

import json from './utis/grupo2.json';

// APP_JSX - Desestructurar el json y armar 3 Objetos -> leader, developers, grupo2.
// APP_JSX - Crear con Objetos -> leader tiene que tener: rol, email, img
//                   -> developers tiene que tener: rol, email, img
//                   -> grupo2 tiene que tener: id, nombreGrupo
// APP_JSX - Enviar las props para que los componentes las trabajen
// APP_JSX - Armar la estructura de Presentacion.
// APP_CSS - Generar los estilos en App.css


function App() {
  return (
    <div>
      ...

    </div>
  );
}

export default App;
