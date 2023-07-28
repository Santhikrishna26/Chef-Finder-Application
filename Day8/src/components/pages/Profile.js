import Header from "../Header";
import Footer from "../Footer";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './Profile.css'
import { NavLink } from "react-router-dom";

const Profile = () => {
  return <>
        <div className="profile-page">
      <Header />
      <br></br>
      <div className="profile-container">

        <Card className="profile-card">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                D
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Divyadashee Das"
            subheader="10 hours ago"
          />
          <CardContent>
            <div className="profile-info">
              <HomeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Home cook
              </Typography>
            </div>
            <div className="profile-info">
              <AccessTimeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Full-Time
              </Typography>
            </div>
            <div className="profile-info">
              <WorkspacePremiumOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Trained cook
              </Typography>
            </div>
            <div className="profile-info">
              <CurrencyRupeeIcon />
              <Typography variant="body2" color="text.secondary">
                15000 - 20000
              </Typography>
            </div>
            <div className="profile-info">
              <LocationOnOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Coimbatore
              </Typography>
            </div>
            <div className="profile-info">
            <Rating
        name="text-feedback"
        value={4}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <div className="action-icons">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
            <div className="apply-button">
              <Button variant='contained' color='warning' size='medium' LinkComponent={NavLink} to='/BookingForm'>Book</Button>
            </div>
          </CardActions>
        </Card>

        <Card className="profile-card">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                S
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shail Shekhar"
            subheader="2 days ago"
          />
          <CardContent>
            <div className="profile-info">
              <HomeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Commi cook
              </Typography>
            </div>
            <div className="profile-info">
              <AccessTimeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Full-Time
              </Typography>
            </div>
            <div className="profile-info">
              <WorkspacePremiumOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Contiental and Indian
              </Typography>
            </div>
            <div className="profile-info">
              <CurrencyRupeeIcon />
              <Typography variant="body2" color="text.secondary">
                18000 - 20000
              </Typography>
            </div>
            <div className="profile-info">
              <LocationOnOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Madurai
              </Typography>
            </div>
            <div className="profile-info">
            <Rating
        name="text-feedback"
        value={3}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <div className="action-icons">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
            <div className="apply-button">
              <Button variant='contained' color='warning' size='medium' LinkComponent={NavLink} to='/BookingForm'>Book</Button>
            </div>
          </CardActions>
        </Card>

        <Card className="profile-card">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                J
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Jenny Jackson"
            subheader="10 mins ago"
          />
          <CardContent>
            <div className="profile-info">
              <HomeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Tiffins Master
              </Typography>
            </div>
            <div className="profile-info">
              <AccessTimeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Part-Time
              </Typography>
            </div>
            <div className="profile-info">
              <WorkspacePremiumOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                10
              </Typography>
            </div>
            <div className="profile-info">
              <CurrencyRupeeIcon />
              <Typography variant="body2" color="text.secondary">
                10000 - 12000
              </Typography>
            </div>
            <div className="profile-info">
              <LocationOnOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Erode
              </Typography>
            </div>
            <div className="profile-info">
            <Rating
        name="text-feedback"
        value={5}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <div className="action-icons">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
            <div className="apply-button">
              <Button variant='contained' color='warning' size='medium' LinkComponent={NavLink} to='/BookingForm'>Book</Button>
            </div>
          </CardActions>
        </Card>

        <Card className="profile-card">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                J
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Jenny Jackson"
            subheader="10 mins ago"
          />
          <CardContent>
            <div className="profile-info">
              <HomeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Tiffins Master
              </Typography>
            </div>
            <div className="profile-info">
              <AccessTimeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Part-Time
              </Typography>
            </div>
            <div className="profile-info">
              <WorkspacePremiumOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                10
              </Typography>
            </div>
            <div className="profile-info">
              <CurrencyRupeeIcon />
              <Typography variant="body2" color="text.secondary">
                10000 - 12000
              </Typography>
            </div>
            <div className="profile-info">
              <LocationOnOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Erode
              </Typography>
            </div>
            <div className="profile-info">
            <Rating
        name="text-feedback"
        value={4}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <div className="action-icons">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
            <div className="apply-button">
              <Button variant='contained' color='warning' size='medium' LinkComponent={NavLink} to='/BookingForm'>Book</Button>
            </div>
          </CardActions>
        </Card>

        <Card className="profile-card">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                J
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Jenny Jackson"
            subheader="10 mins ago"
          />
          <CardContent>
            <div className="profile-info">
              <HomeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Tiffins Master
              </Typography>
            </div>
            <div className="profile-info">
              <AccessTimeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Part-Time
              </Typography>
            </div>
            <div className="profile-info">
              <WorkspacePremiumOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                10
              </Typography>
            </div>
            <div className="profile-info">
              <CurrencyRupeeIcon />
              <Typography variant="body2" color="text.secondary">
                10000 - 12000
              </Typography>
            </div>
            <div className="profile-info">
              <LocationOnOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Erode
              </Typography>
            </div>
            <div className="profile-info">
            <Rating
        name="text-feedback"
        value={4}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <div className="action-icons">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
            <div className="apply-button">
              <Button variant='contained' color='warning' size='medium' LinkComponent={NavLink} to='/BookingForm'>Book</Button>
            </div>
          </CardActions>
        </Card>
        
        <Card className="profile-card">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                J
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Jenny Jackson"
            subheader="10 mins ago"
          />
          <CardContent>
            <div className="profile-info">
              <HomeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Tiffins Master
              </Typography>
            </div>
            <div className="profile-info">
              <AccessTimeOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Part-Time
              </Typography>
            </div>
            <div className="profile-info">
              <WorkspacePremiumOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                10
              </Typography>
            </div>
            <div className="profile-info">
              <CurrencyRupeeIcon />
              <Typography variant="body2" color="text.secondary">
                10000 - 12000
              </Typography>
            </div>
            <div className="profile-info">
              <LocationOnOutlinedIcon />
              <Typography variant="body2" color="text.secondary">
                Erode
              </Typography>
            </div>
            <div className="profile-info">
            <Rating
        name="text-feedback"
        value={4}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <div className="action-icons">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
            <div className="apply-button">
              <Button variant='contained' color='warning' size='medium' LinkComponent={NavLink} to='/BookingForm'>Book</Button>
            </div>
          </CardActions>
        </Card>
      </div>
      <br></br>
      <Footer />
    </div>
  </>;
};

export default Profile;
