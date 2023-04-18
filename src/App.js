import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './index.css';
import Titulo from './components/Titulo/Titulo';
import Leader from './components/Leader/Leader';
import Developers from './components/Developers/Developers';
import Footer from './components/Footer/Footer';
import json from './utis/grupo2.json';

// APP_JSX - Desestructurar el json y armar 2 Objetos -> members, grupo2.
//          -> members tiene que tener: id, rol, email, img
//          -> grupo2 tiene que tener: id, nombreGrupo
// APP_JSX - Enviar los objetos a los componentes
// APP_JSX - Armar la estructura de Presentacion.
// APP_CSS - Generar los estilos en App.css

function App() {

const {id,leader,members} = json[0]
//Destructurin del Archivo Json, es un Array con elementos y 1 objeto
const group2 = {
  idGroup: id,
  nombreGrup: 'Reactivos'
}



let [developers, setDevelopers] = useState([])
//Creo un Stado, para los Developer, Array vacio por que voy a trabajar
//Con members que es un array con los emails


//Durante el montaje del componente, recorro el array y armo un objeto
//con cada uno de los members {}
//No lo puse imagen por que el json no tiene esa info, quizas convenga agregarla
//por elmento o modificar el jason
useEffect(() => {
  setDevelopers(
    members.map(dev => ({
      id: Date.now(),
      rol: 'Developer',
      email: dev
    }))
  );
}, []);


const leaderDetail = {
  id: Date.now(),
  rol:'Leader',
  email:leader
}


  return (
    
    <div className="divApp">
      <Titulo group2={group2}/>
      
      <div className='divMembers'>
        <div className='divLeader'>
          <Leader leader={leaderDetail}/>
        </div>
        <div>
          <Developers developers={developers}/>
        </div>
      </div>
      
      <Footer  id={id}/>
    </div>
    
  );
}

export default App