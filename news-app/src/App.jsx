
import { useState } from 'react'
import Getnews from './Components/Getnews'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


//setCategory={ setCategory }
function App() {
 
  const [category,setCategory]= useState("general")
  const [country,setCountry] = useState("us")

  return (
    <>
    <Navbar category ={setCategory} cntry ={setCountry}/>
    <Getnews ctgry ={category} cntry={country}/>
    <Footer/>
    </>
  )
}

export default App
