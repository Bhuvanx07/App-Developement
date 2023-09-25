import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './eng.css';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <><div className='mib'><img className='ig'src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg'></img>
      
      <Card sx={{ minWidth: 650, marginLeft: 8,marginTop:12}}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            MBA
          </Typography>
          MBA Full Form: Master of Business Administration
          
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          MBA Course Level: Post Graduation Degree Course 
          </Typography>
          <Typography>Types of MBA: Full Time MBA, Online MBA, Executive MBA, Distance MBA, Integrated MBA</Typography>
          <Typography></Typography> */}
          <h1 className='cd'>Property Details</h1>
          <ul className='poi'>
          <li> Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...</li>
  <li>The number of BHKs in an apartment is an essential factor that influences its price and value in the real estate market.</li>
  <li>A fantastic house for sale advertisement should help readers imagine themselves in that property. The copy should highlight all of the house’s best features and mention things buyers might be interested in, such as the property’s history.</li>
  <li>For household goods give the brand, model, year of manufacturing, condition and expected price, etc.</li>
  <li>It is freehold, Ist floor, with balcony. It is spacious, well ventilated, attached bathroom with fine wood-work in the kitchen and every room.</li>
  <li>Spacious, well-ventilated, attached bathroom, decent flooring, modular kitchen, high Quality designed woodwork. Ist floor, two-side open, facing a park with parking facility.</li>
  <li>Huge inner city terrace with 2 comfort zones.A home of a bygone era made new again.Curl up in front of your own cinema</li>
  <li>INR 5,000,000 – INR 18,000,000</li>
  <li>A balcony can serve as your own personal outdoor oasis, a place to escape from the hustle and bustle of daily life and take a breath of fresh air.</li>
  <li>flat area outside a building, often with a stone floor, or a narrow, flat strip of land on the slope of a hill that is used for growing crops.</li>
</ul>
          
        </CardContent>
        <CardActions>
          <Link to="/ownb">

          <Button size="small">Owner details</Button>
          </Link>
        </CardActions>
      </Card>
    </div></>
  );
}

