import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Pages/Shared/Navbar'

function App() {
    return (
        <div className="max-w-7xl mx-auto px-10">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
