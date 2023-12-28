import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import Home from './pages/Home'
import MealPlan from './pages/MealPlan'
import MyCookbook from './pages/MyCookbook'
import Recipes from './pages/Recipes'
import Drinks from './pages/Drinks'





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/meal-plan' element={<MealPlan />} />
        <Route path='/my-cookbook' element={<MyCookbook />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/drinks' element={<Drinks />} />
      </Routes>



    </>
  )
}

export default App
