import { useState } from 'react'
import './App.css'
import { Comadd } from './components/comadd'
import { Hello } from './components/Hello'


function App() {




return (
  <>

    <Hello text={'hello'} color={'Red'} backgroundColor={"green"} />
    <Comadd text={'Add'} textadd={'new'} num={1234} color={'blue'} backgroundColor={'coral'} />
    


  </>
)
}

export default App
