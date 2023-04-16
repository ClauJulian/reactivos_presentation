import logo from './logo.svg';
import './App.css';

import Titulo from './components/Titulo/Titulo';
import Leader from './components/Leader/Leader';
import Developers from './components/Developers/Developers';
import Footer from './components/Footer/Footer';

import json from './utis/grupo2.json';
import { useState } from 'react';

// APP_JSX - Desestructurar el json y armar 2 Objetos -> members, grupo2.
//          -> members tiene que tener: id, rol, email, img
//          -> grupo2 tiene que tener: id, nombreGrupo
// APP_JSX - Enviar los objetos a los componentes
// APP_JSX - Armar la estructura de Presentacion.
// APP_CSS - Generar los estilos en App.css


function App() {
  const [miembrosState , setMiembrosState]= useState({
    "id": "G2-WCZEE",
    "leader": "wg.claudiajulian@gmail.com",
    "members": [
      "cristian.zolkowski@gmail.com",
      "zeduard89@gmail.com",
      "eugenia.veron@hotmail.com",
      "eve-lanegra@hotmail.com"
    ]
  });

// ARMAR OBJETO MEMBERS  
const miembrosDesarrolladores = miembrosState.members;
const members = miembrosDesarrolladores.map((desarrollador)=>{return {"id":new Date(),"rol":"developer","email":desarrollador}})  
  
const lider ={"id": new Date(),
            "rol": "leader",
            "email": miembrosState.leader
}
  
members.push(lider);  

// ARMAR OBJETO GRUPO 2
const {id} = miembrosState;
const nombre = "react-ivos";
const grupo2 = {id, nombre}


// ENVIO DE OBJETOS A COMPONENTES
return (
<div>
  <div>
      <div>
          <Titulo key={grupo2.id} grupo2={grupo2}/>    
      </div>
      <div>
          <Leader key={grupo2.id} members={members}/>
      </div>
  </div>

  <div>
        <Developers key={grupo2.id} members={members}/>   
  </div>
  
  <div>
      <Footer key={grupo2.id} grupo2={grupo2}/>
  </div>
</div>
);
}

export default App;
