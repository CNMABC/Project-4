import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/Home/NavBar'
import Home from './components/Home/Home'
import OutfitPage from './components/Outfits/OutfitPage'
import OutfitShow from './components/Outfits/OutfitShow'
import Basket from './components/Basket/Basket'


const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/outfits">
          <OutfitPage />
        </Route>
        <Route path="/outfits/:id">
          <OutfitShow />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
