import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Masai } from './components/Masai'

function App() {

  const Page = 1

  const [count, setCount] = useState(Page)
  const [data, setData] = useState([])


  useEffect(() => {

    setData([...data, <Masai/>])

  })

  return (
    <div className="container">
      <h1>This is Infinite Scrolling</h1>
      {data.map((el,id)=>{
        return (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <span>{el}</span><h1 style={{marginLeft:"20px"}}> {id}</h1>
          </div>
        )

      })}

    </div>
  )
}

export default App
