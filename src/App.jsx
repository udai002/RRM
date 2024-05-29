
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'
import Home from './components/Home'

function App() {
  

  return (
      
        <BrowserRouter>
        <Routes>
          {/* <Route  path='/' element={<MilkForm />}/> */}
          <Route  path='/signin' element={<Signin />} />
          <Route path='/' element={<Home/>}/>
        </Routes>    
        
        </BrowserRouter>
                                                                                                                                                                                
  )
}

export default App
