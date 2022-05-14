import './App.css'
import React from 'react'
 
import { BrowserRouter } from  'react-router-dom' // essa importação mudou
import Menu from '../components/layout/menu/Menu'
import Content from '../components/layout/content/Content'
 

 
const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
    </div>
)
 
export default App