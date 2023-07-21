import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Booking from "./components/pages/Booking";
import Dashboard from "./components/pages/Dashboard";
import Menu from "./components/pages/Menu";
import Profile from "./components/pages/Profile";
import Layout from "./components/pages/Layout";
import UserProfile from "./components/pages/UserProfile";
import Edit from "./components/pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={<Layout />}>
          <Route index element={<LoginReg />} />
          </Route>
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/Edit" element={<Edit />} />
            
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
