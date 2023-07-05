import './header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import SignIn from './login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 'auto',
  marginLeft: '30%',
  height:36,
  width: 400,
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(3),
  //   width: 'auto',
  // },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
}));


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







class Header extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          loggedIn: false
      }
  }





render(){
  return (
    <div> 
    <ThemeProvider theme={defaultTheme}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <ShoppingCartIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          upGrad E-Shop
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        {this.state.loggedIn && 

          <Button component={RouterLink} to="/home" color="inherit" size="medium">Home</Button>
        }

        {this.state.loggedIn &&

          <Button component={RouterLink} to="/add-product" color="inherit" size="medium">Add Product</Button>
        }

        {this.state.loggedIn &&
          <Button component={RouterLink} to="/logout" color="error" variant="contained" size="medium">LOGOUT</Button>
        }


        {!this.state.loggedIn && 

           <Button color="inherit" size="medium">
              <Link component={RouterLink} to="/login" className='submit' to={{pathname: "/login"}}>Login</Link>
           </Button>
        } 
        
        {!this.state.loggedIn &&
          <Button component={RouterLink} to="/signup" color="inherit" size="medium">Sign Up</Button>

        }


      </Toolbar>
    </AppBar>
    </ThemeProvider>
    </div>
  );
}
}

export default Header;
