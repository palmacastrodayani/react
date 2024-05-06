import { useState } from 'react'
import './App.css'
import Card from"./Components/Card"
import Hero from"./Components/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    {count}
    <button onClick={() => setCount (count + 1 ) } > + </button>
   

      <Card 
      image="https://format-e.es/wp-content/uploads/2016/01/world-idioms.jpg"
      name="Mo"
      city="Stamford"
      job="Chef"
    />

      <Card 
        image="https://variety.com/wp-content/uploads/2023/06/GettyImages-1495234870.jpg"
        name="Tom Holland"
        city="West London"
        job="actor"
      
      />

      < Card 
        image="https://wwd.com/wp-content/uploads/2023/03/VK_1340_Final_cropped.jpg?w=1024"
        name="Jimin"
        city="South Korea"
        job="Singer"
      
      /> 

     </>
  )
}

export default App
