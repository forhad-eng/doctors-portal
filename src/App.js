import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Appointment from './Pages/Appointment/Appointment'
import AddDoctor from './Pages/Dashboard/AddDoctor'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyAppointment from './Pages/Dashboard/MyAppointment'
import MyReview from './Pages/Dashboard/MyReview'
import Users from './Pages/Dashboard/Users'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import RequireAdmin from './Pages/Login/RequireAdmin'
import RequireAuth from './Pages/Login/RequireAuth'
import Signup from './Pages/Login/Signup'
import Footer from './Pages/Shared/Footer'
import Navbar from './Pages/Shared/Navbar'

function App() {
    return (
        <div className="max-w-7xl mx-auto px-10">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <Appointment />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<MyAppointment />} />
                    <Route path="review" element={<MyReview />} />
                    <Route
                        path="users"
                        element={
                            <RequireAdmin>
                                <Users />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="add-doctor"
                        element={
                            <RequireAdmin>
                                <AddDoctor />
                            </RequireAdmin>
                        }
                    />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default App
