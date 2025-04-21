import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './Pages/Navbar'
function MovieWeb() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<div>

        </div>} />
    </Routes>
    </BrowserRouter>
  )
}

export default MovieWeb