import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/")
      const acquiredData = await response.json();
      setData(acquiredData);
      console.log(acquiredData);
      
    }
    getData()
  }, [])

  return (
    <>
      <p>The thing is {String(data?.index)}</p>
    </>
  )
}

export default App
