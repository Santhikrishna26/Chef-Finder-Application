import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Menu.css'; 

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Menu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Header />
      <div className="menu-container"> {/* Apply the menu-container class here */}
        {/* Indian Cuisine Card */}
        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Indian Cuisine"
            // subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://amritsr.com/wp-content/uploads/2020/08/Specialty-of-Indian-Cuisine.jpg"
            alt="Indian Cuisine"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Nothing quite matches Indian cuisine. In this incredibly diverse country, their cuisines are far and wide. The flavours and ingredients used vary greatly from region to region, from northern India to south.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon className={expanded ? 'ExpandMoreIcon rotated' : 'ExpandMoreIcon'} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Menu:</Typography>
              <Typography paragraph>
                Vegetarianism: A significant portion of Indian cuisine is vegetarian-friendly due to cultural, religious, and historical factors. Many Indians follow vegetarian or vegan diets, leading to a wide array of vegetable-based dishes.
              </Typography>
              <Typography paragraph>
                Rice and Bread: Rice is a staple in many parts of South India, while in the North, various bread types like chapati, naan, and paratha take prominence. Each region has its unique bread preparations.
              </Typography>
              <Typography paragraph>
                Tandoori and Grilled Dishes: Tandoori cooking involves marinating meats or vegetables in yogurt and spices before cooking them in a traditional clay oven (tandoor). This method imparts a unique smoky flavor to the dishes.
              </Typography>
              <Typography paragraph>
                Sweets and Desserts: Indian desserts are rich, sweet, and often made with ingredients like milk, ghee (clarified butter), sugar, and a variety of nuts. Popular sweets include gulab jamun, jalebi, kheer, and rasgulla.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        {/* Italian Cuisine Card */}
        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Italian Cuisine"
            // subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://www.realsimple.com/thmb/n7LREb712VOF9dHoWYQFKAxidMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italian-food-2000-465639d6117745278d67deebd968cd1e.jpg"
            alt="Italian Cuisine"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            When it comes to comfort food, Italian dishes reign supreme. Filled with tomato-based sauces, creamy cheese, and pastas galore, it’s no wonder why so many people love this cuisine!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon className={expanded ? 'ExpandMoreIcon rotated' : 'ExpandMoreIcon'} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Menu:</Typography>
              <Typography paragraph>
                Pasta and Pizza: Italian cuisine is famous for its delicious pasta dishes and authentic pizzas with various toppings.
              </Typography>
              <Typography paragraph>
                Cheese and Antipasti: Italy is home to a wide variety of cheeses, and antipasti (appetizers) are an essential part of Italian meals.
              </Typography>
              <Typography paragraph>
                Seafood and Risotto: Coastal regions in Italy are known for their seafood dishes, and risotto is a popular rice-based dish.
              </Typography>
              <Typography paragraph>
                Gelato and Tiramisu: Italian desserts like gelato and tiramisu are loved worldwide for their creamy, indulgent flavors.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Mexican Cuisine"
            // subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="data:image/jpeg;base64,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"
            alt="Mexican Cuisine"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Mexican cuisine is famous for its bold and vibrant flavors, combining a variety of fresh ingredients and spices. It is known for dishes like tacos, enchiladas, and guacamole. Mexican cuisine also has a rich history with influences from indigenous, Spanish, and other cultures.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon className={expanded ? 'ExpandMoreIcon rotated' : 'ExpandMoreIcon'} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Menu:</Typography>
              <Typography paragraph>
                Tacos: Soft or hard-shelled, tacos are a popular Mexican street food, filled with various meats, vegetables, and toppings.
              </Typography>
              <Typography paragraph>
                Enchiladas: Tortillas rolled around a filling, topped with sauce, and baked to perfection.
              </Typography>
              <Typography paragraph>
                Guacamole: A classic Mexican dip made with mashed avocados, tomatoes, onions, lime juice, and cilantro.
              </Typography>
              <Typography paragraph>
                Salsas and Hot Sauces: A wide variety of salsas and hot sauces add zest and spice to Mexican dishes.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
