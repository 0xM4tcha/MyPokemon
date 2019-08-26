import React from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import PokemonProvider from './context/PokemonContext'

const App = (props) => {
  return (
      <PokemonProvider>
        {props.children}
      </PokemonProvider>  
  );
}

export default App;
