import { Route, Routes } from 'react-router-dom'
import Appointment from './Pages/Appointment/Appointment'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Login/Signup'
import Navbar from './Pages/Shared/Navbar'

function App() {
    return (
        <div className="max-w-7xl mx-auto px-10">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App
