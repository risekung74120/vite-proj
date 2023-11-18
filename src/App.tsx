import { useState } from 'react'
import './App.css'
import { Comadd } from './components/comadd'
import { Hello } from './components/Hello'
import './index.css'
import { nameMock } from './shared/mock.data'
import { Addname } from './components/Addname'


function App() {

  const [text, setText] = useState<string>('This')
  let [listname, setListname] = useState<string[]>(nameMock)
  const [name, setName] = useState<string>('')

  const AddTodo = () => {
    if (name) {
      listname.push(name)
      setListname(listname)
    }
    setName('')
  }

  let [count, setCount] = useState<number>(0)

  const plus = () => {
    count++
    setCount(count);
  }

  const minus = () => {
    count--
    setCount(count);
  }



  return (
    <>
      <div className='mt-4 mb-6'>
        <input type="text" onChange={(e) => {
          console.log(e);

          setText(e.target.value)
        }} />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>


      <div className='mt-4 mb-6'>
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
      </div>


      <div className='mt-4 mb-6'>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          Click
        </button>
      </div>


      <div className='mt-4 mb-6'>
        <Hello text={'hello'} color={'Red'} backgroundColor={"green"} />
        <Comadd text={'Add'} textadd={'new'} num={1234} color={'blue'} backgroundColor={'coral'} />
      </div>

      <div className='mt-4 mb-6'>
        <h1>{text}</h1>
      </div >


      <div className='flex justify-evenly'>
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={plus}>เพิ่ม</button>
        <h1>{count}</h1>
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={minus}>ลบ</button>
      </div >

      <div className='grid grid-flow-row auto-rows-max'>

        <input onChange={(e) => setName(e.target.value)} className='' value={name}/>
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={AddTodo}>ADD NAME</button>

        <Addname listname={listname} />



      </div >


    </>
  )
}

export default App
