import React from 'react'
import SearchBar from '../containers/SearchBar'
import AutoFillLogic from '../containers/AutoFillLogic'
import CircularProgressLogic from '../containers/CircularProgressLogic'
const App = () => (
  <div>
    <SearchBar/>
    <AutoFillLogic/>
    <CircularProgressLogic/>
  </div>
)

export default App
