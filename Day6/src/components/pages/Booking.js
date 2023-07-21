import { Card,Typography,CardContent,CardActionArea,CardMedia } from "@mui/material";
import Header from "../Header";
import './Booking.css'
import Footer from "../Footer";

const Booking = () => {
  return <>
    <div className="booking-page">
      <Header />
        <h2 className="booking-title"><b>My Bookings </b></h2>
        <p className="booking-subtitle">View all your bookings here</p>
        
      <div className="booking-card-container">
        <Card sx={{ maxWidth: 345 }} className="booking-card">
      <CardActionArea>
        <CardMedia
        className="booking-card-media"
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="green iguana"
        />
        <CardContent className="booking-card-content">
          <Typography className="booking-card-title" gutterBottom variant="h5" component="div">
            Chef - Cook for One Meal 
          </Typography>
          <Typography className="booking-card-description"  variant="body2" color="text.secondary">
           See your Chef Bookings
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        <Card sx={{ maxWidth: 345 }} className="booking-card">
      <CardActionArea>
        <CardMedia
        className="booking-card-media"
          component="img"
          height="140"
          image="https://img.ltwebstatic.com/images3_pi/2021/06/21/16242621290cd58d9258613527945ea80d18bb161d_thumbnail_720x.webp"
          alt="green iguana"
        />
        <CardContent className="booking-card-content">
          <Typography className="booking-card-title" gutterBottom variant="h5" component="div">
            Cook for a Month
          </Typography>
          <Typography className="booking-card-description"  variant="body2" color="text.secondary">
           See your trial Bookings
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        <Card sx={{ maxWidth: 345 }} className="booking-card">
      <CardActionArea>
        <CardMedia
        className="booking-card-media"
          component="img"
          height="140"
          image="https://www.gardenpatch.co.uk/wp-content/uploads/2020/10/@home_joyr-2-e1602687692869.jpg"
          alt="green iguana"
        />
        <CardContent className="booking-card-content">
          <Typography className="booking-card-title" gutterBottom variant="h5" component="div">
            Chef for Party
          </Typography>
          <Typography className="booking-card-description"  variant="body2" color="text.secondary">
           See your party chef Bookings
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        <Card sx={{ maxWidth: 345 }} className="booking-card">
      <CardActionArea>
        <CardMedia
        className="booking-card-media"
          component="img"
          height="140"
          image="data:image/png;base64,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"
          alt="green iguana"
        />
        <CardContent className="booking-card-content">
          <Typography className="booking-card-title" gutterBottom variant="h5" component="div">
            Royale - Full Time Cook
          </Typography>
          <Typography className="booking-card-description"  variant="body2" color="text.secondary">
           See your full time cook Bookings
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <br></br>

    <Footer />

    </div> 
  </>;
};

export default Booking;
