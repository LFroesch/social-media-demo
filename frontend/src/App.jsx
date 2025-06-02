import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignupPage from "./pages/auth/signup/SignupPage";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className='flex max-w-6xl mx-auto'>
      {/* Common Component, bc it's not wrapped with routes */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
				<Route path='/login' element={<LoginPage />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <RightPanel />
      <Toaster />
    </div>
  )
}

export default App
