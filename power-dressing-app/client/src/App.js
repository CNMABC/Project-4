import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/Home/NavBar'
import Home from './components/Home/Home'
import OutfitIndex from './components/Outfits/OutfitIndex'
import Basket from './components/Basket/Basket'



const App = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/outfits') // * <-- replace with your endpoint
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/outfits">
          <OutfitIndex />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
