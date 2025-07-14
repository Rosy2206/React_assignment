import { useState } from 'react'
import Home from './Home'
import Second from './Second'
import Spreadsheet from './Spreadsheet'
import Table from './Table'
import { Tab } from 'bootstrap'
function App() {


  return (
    <>
      <Home />
      <hr></hr>
      <Second />
      <Spreadsheet />
      <Table/>
    </>
  )
}

export default App
