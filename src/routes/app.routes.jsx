import { Route, Routes,  } from "react-router-dom";
import { Details } from '../Pages/Details'
import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'
import { New } from '../Pages/New'
export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/new" element={<New/>}/>
      </Routes>
    
  )
}