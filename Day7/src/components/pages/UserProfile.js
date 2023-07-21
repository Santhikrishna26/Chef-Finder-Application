import React from 'react';
import "./UserProfile.css";
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import  Box  from "@mui/material/Box";
import Header from '../Header';


const UserProfile = () => {
  return (
    <div>
        <Header/>
    <div class="container">
  <div class="row">
    <div class="main">
      <div class="info">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="prof rounded-circle img-fluid" />
        <h1>SK</h1>
        <hr></hr>
      </div>
      <div class="body">
       <ul class="fa-ul">
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Username   :     Shanthikrishna</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Email      :     shanthikrishna@gmail.com</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>Location   :     Coimbatore</li>
         <li><span class="fa-li"><i class="fas fa-heart"></i></span>PhoneNumber:     8870051808</li>
        </ul>
      </div>
      <div class="footer">
      <Button component={NavLink} to='/Edit' variant="contained"  >Edit profile</Button> 

      </div>
    </div>
  </div>
  <div>
  </div>
</div>
</div>


  );
};

export default UserProfile;