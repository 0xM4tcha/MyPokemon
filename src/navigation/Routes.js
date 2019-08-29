import React from 'react'
import { Route,IndexRoute } from "react-router"
import App from '../App.js'
import DetailPokemon from '../view/DetailPokemon'
import MyPokemon from '../view/MyPokemon'
import ListTypePokemon from '../view/ListTypePokemon'

const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={ListTypePokemon}/>
        <Route path="DetailPokemon" component={DetailPokemon}/>
        <Route path="MyPokemon" component={MyPokemon}/>
    </Route>
  );
export default Routes;