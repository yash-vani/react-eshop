import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ColorToggleButton from './toggleButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        upGrad
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));


const cards = [

{
  imageUrl:"https://www.schools365.in/media/catalog/product/cache/a8d5716bb2b42a38d9e7c5b6772611b8/p/s/pssw002new_1.jpg",
  title:"School Shoes",
  price:2000,
  description:"Comfortable school shoes for children above 12 years.",
  addedOn:0,
  category:"footwear"
},

{
  imageUrl:"https://static.fibre2fashion.com/newsresource/images/273/rares-yeezy_285434.jpg",
  title:"Sports Sneakers",
  price:6700,
  description:"Comfortable sneakers for college going students. Wear them with your favourite pair of jeans to create a funky look.",
  addedOn:1,
  category:"footwear"
},


{
  imageUrl:"https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662632395-9968.jpg?im=FeatureCrop,width=826,height=465",
  title:"Iphone 12",
  price:73000,
  description:"Buy an Iphone today.You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly. You can also chat with a Specialist anytime.",
  addedOn:3,
  category:"electronics"
},
{
  imageUrl:"https://m.media-amazon.com/images/I/71dg4k4ZQnS._AC_UL1500_.jpg",
  title:"Men's Jeans",
  price:2400,
  description:"Trendy blue men's denims.",
  addedOn:4,
  category:"apparel"
},
{
  imageUrl:"https://images.ctfassets.net/3s5io6mnxfqz/4IEHnYIrfzoxYOQTraepmO/c1d1eab003ecf5d8a29e9eb8bec94450/AdobeStock_272372014.jpeg?w=828",
  title:"Face Cream",
  price:600,
  description:"Organic cosmentics for women",
  addedOn:5,
  category:"cosmetics"
},
{
  imageUrl:"https://i0.wp.com/boatstorekochi.com/wp-content/uploads/2021/04/boAt-Airdopes-441-Bluetooth-True-Wireless-buy-in-kerala-online-at-be-1.png?fit=540%2C540&ssl=1",
  title:"Boat Airdopes",
  price:1200,
  description:"Let the noise of the world drown as you jam to your rhythm with Airdopes 141. Equipped with 8mm drivers, these dope wireless earbuds make your playlist sound better with crystal clear audio quality and powerful bass.",
  addedOn:6,
  category:"electronics"
}

];


const theme = {
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#e91e63',
    },
  },
};

const defaultTheme = createTheme(theme);

export default function Products() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>

        <Container sx={{ py: 5 }} maxWidth="lg">


          <Grid container alignItems="center"
              justifyContent="center">
            <Grid item xs={5}>
              <ColorToggleButton />
            </Grid>
          </Grid>

          <Box sx={{ m: 5 }} />

          <Grid container>
            <Grid item xs={5}>
              

              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Sort By:
                </InputLabel>

                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
              
                  input={<BootstrapInput />}
                >
                  <MenuItem value={""}>All</MenuItem>
                  <MenuItem value={"footwear"}>Electronics</MenuItem>
                  <MenuItem value={"electronics"}>Electronics</MenuItem>
                  <MenuItem value={"apparel"}>Apparel</MenuItem>
                  <MenuItem value={"cosmetics"}>Personal Care</MenuItem>
                </Select>





              </FormControl>




            </Grid>
          </Grid>
        
        <Box sx={{ m: 5 }} />


          <Grid container spacing={4}>
            {cards.map((card) => (
              
              <Grid item key={card} xs={12} sm={6} md={4}>
                
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={ card['imageUrl'] }
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="subtitle1" component="h2" xs={12} sm={6}>
                      Heading
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h2" xs={12} sm={6}>
                      Price
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" variant="contained">BUY</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}