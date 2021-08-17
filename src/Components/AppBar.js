import React from 'react';
import Logo from '../Assets/download.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: 
    {
    flexGrow: 1,
    },
  menuButton: 
    {
    marginRight: theme.spacing(1),
    },
  logo : 
    {
    width : "100px",
    height : "1-0px"
    },
  title: 
    {
    flexGrow: 1,
    },
  bookNow : 
    {
    background : "#23b009",
    marginLeft : theme.spacing(3),
    color : "white",
    padding : "7px 15px 5px 15px", 
    border : "0px",
    borderRadius : "20px",
    fontSize : "16px",
    fontWeight : 700,

    '&:hover':
      {
      color : "white",
      backgroundColor : "#23b009"
      }
    },
  button : 
    {
    border : "none",
    borderBottom : "solid transparent 4px",
    marginRight : "40px",
    padding : "0%",
    fontSize : "16px",
    fontWeight : 700,
    '&:hover':
      {
      color : "#23b009",
      backgroundColor : "white"
      },
    '&:focus':
      {
      borderBottom : "solid #23b009 4px",
      color : "#23b009",
      fontSize : "16px",
      }
    },
  AppBarManue : 
    {
    text : "capitalize",
    display : "flex",
    listStyle : "none",
    }
}));


const NavBar = () =>
{
  const classes = useStyles();

  return(
    <>
    <Container>
    <div className={classes.root}>
      <AppBar position="static" color = "white">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" disabled>
            < img className = {classes.logo} src = {Logo}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
      
          </Typography>
              <Button className = {classes.button}>Home</Button>
              <Button className = {classes.button}>About Us</Button>
              <Button className = {classes.button}>Srvices</Button>
              <Button className = {classes.button}>Blogs</Button>
              <Button className = {classes.button}>Contact us</Button>
              <Button className={classes.bookNow}>Book Now</Button>
        </Toolbar>
      </AppBar>
    </div>

    </Container>
          </>
  )
}
export default NavBar;
