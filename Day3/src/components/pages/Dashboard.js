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
            <h1>Your kitchen deserves us!</h1>
            <img src='https://eatdrinkflash.co.uk/wp-content/uploads/2021/06/DSC00807-scaled.jpg'/>
            <p>Find the perfect chef for your next culinary experience.</p>
            {/* <img src="https://wheyforliving.com/wp-content/uploads/2020/01/daily-cooking-header.jpg" alt="Food" /> */}
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