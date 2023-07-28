import { AppBar, Box, Toolbar,Button, CssBaseline, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Dashboard.css'



const Dashboard = () => {
  // const navigate = useNavigate()
  // const handleLogout = () => {
  //   console.log("Logout Clicked");
  //   navigate('/')
  // }
  return <>
    <CssBaseline />
      <div className="dashboard-container">
        <Header />
       

        <div className="dashboard-section">
          <div className="dashboard-section-content">
            <h1>Your Events deserves us!</h1>
            <img src='https://assets-global.website-files.com/640a2dd38b26e6890f8956a0/641c6c865a360d31f4b68fcb_iStock-1054862736.jpeg'/>
            <p>Find the perfect chef for your next culinary experience.</p>
            <h2>Your Perfect Cook</h2>
            <p>Trained and verified cooks to ensure you never have to compromise.</p>
          </div>
        </div>

        <div className="dashboard-section">
          <div className="dashboard-section-content">
           
            <h2>Timely Visits Daily</h2>
            <p>Punctual cook to make sure you never have to wait for your food.</p>
          </div>
        </div>

        <div className="dashboard-section">
          <div className="dashboard-section-content">

            <h2>28 Days Assurance</h2>
            <p>Instant substitute in case of leave to ensure uninterrupted service.</p>
          </div>
        </div>

        <Footer />
      </div>
  </>;
};

export default Dashboard;