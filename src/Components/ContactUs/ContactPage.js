import { Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import MapComponent from './Map';
import { makeStyles } from '@material-ui/core';
import { createTheme,ThemeProvider } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Container } from '@material-ui/core';
const theme = createTheme({
    palette: {
        primary: {
          main: "#1faf05",
        },
      },
})

const useStyle = makeStyles(theme =>({
    root : {
        display : "flex",
        flexDirection : "column",
        width : "70%",
        margin : "auto",
        maxWidth : "700px",
        [theme.breakpoints.down('sm')] : {
            width : "100%",
        },
    },
    writtenContact : {
        display : "flex",
        flexDirection : "column",
        [theme.breakpoints.up('sm')] : {
        alignItems : "center",
        marginTop : "10px",
        },
    },
    border : {
        border : "none",
    },
    btnStyle : {
        color : "white",
        borderRadius : "20px",
        marginTop : "15px",
        background : "#1faf05",
    },
    fieldStyle : {
        margin : "10px",
        padding : "12px",
        border : "none",
        boxShadow : "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
        borderRadius : "4px",
        outline : "none",
    },
    displayFlexRow : {
        display : "flex",
        alignItems: "center",
        marginBottom : "40px",
        [theme.breakpoints.down('sm')] : {
            marginBottom : "35px",
        },
    },
    inonStyle : {
        display : "grid",
        placeItems: "center",
        borderRadius : "50px",
        [theme.breakpoints.down('sm')] : {
            padding : "8px",
        },
        padding: "12px",
        background : "#1faf05",
        color : "white",
        marginRight : "15px",
    },
    mainPart : {
        marginTop : "15vh",
        [theme.breakpoints.down('sm')] : {
            marginTop : "5vh",
        },
    },
    upperPartHeader : {
        height : "30vh",
        backgroundColor : "lightGray",
        display : "flex",
        alignItems : "center",
    },
    shape : {
        borderRadius : "39% 61% 69% 31% / 67% 64% 36% 33%",
        backgroundColor : "white",
        height : "90%",
        [theme.breakpoints.up('xs')] : {
            width : "70%",
        },
        [theme.breakpoints.up('sm')] : {
            width : "40%",
        },
        [theme.breakpoints.up('md')] : {
            width : "25%",
        },
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "column",
        fontWeight : "bolder",
        marginLeft : "10%",
    },
    shapeLinks : {
        textDecoration : "none",
        color : "black",
    },
    mapContainer : {
        marginTop : "20px",
    },
}));

const ContactPage = () =>
{
    const classes = useStyle();

    const [messege, setMessege] = React.useState({
            name    : "",
            email   : "",
            messege : "",
    });
    const [value, setValue] = React.useState({});
    const [count, setCount] = React.useState(0);
    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setCount(count + 1);
        if(value ==="")
        {
            console.log("Empty")
        }
        setMessege((previousValue) =>{
            return{
                ...previousValue,
                [name] : value,
            }
        })
    }
    const onSubmit = () =>
    {
            setValue(messege);
    }
    return(<>
    <ThemeProvider theme = {theme}>
        <Container>
            <Grid container className = {classes.upperPartHeader}>
                <div className = {classes.shape}>
                    <h1>Contact</h1>
                    <p ><a href = "#" className = {classes.shapeLinks} color = "primary">Home</a> / <a href = "#"  className = {classes.shapeLinks}>Contact us</a></p>
                </div>
            </Grid>
        <Grid container className = {classes.mainPart}>
        <Grid item xs = {12} sm = {6} className = {classes.writtenContact}>
           <div className = {classes.border}>
           <div className = {classes.displayFlexRow}>
               <div className = {classes.inonStyle}>
                <LocationOnIcon  />
                </div>
               <div>
               <h3>Address</h3>
               <address>
                Office No B-13, Second floor Red Mall<br/>
                Shalamar Link Road Lahore<br/>
                </address>
               </div>
            </div>
            <div className = {classes.displayFlexRow}>
                <div className = {classes.inonStyle}>
                <CallIcon/>
                </div>
                <div>
                <h3>Contact Number</h3>
                <p>03169650686</p>
                </div>
            </div>
            <div className = {classes.displayFlexRow}>
                <div className = {classes.inonStyle}>
                <MailOutlineIcon />
                </div>
                <div>
                <h3>Email Address</h3>
                <p>hamzafaham111@gmail.com</p>
                </div>
            </div>
           </div>
        </Grid>
        <Grid item xs = {12} sm = {6} className = {classes.root}>
            <from className = {classes.root}>
                <div >
                    <h4>{value.name}{value.email}{value.messege}</h4>
                </div>
            <input 
            placeholder = "Full Name" 
            className = {classes.fieldStyle}
            onChange = {inputEvent}
            name = "name"
            value = {messege.name}
            />
            <input 
            placeholder = "Email" 
            className = {classes.fieldStyle}
            onChange = {inputEvent}
            name = "email"
            value = {messege.email}
            />
            <textarea
            placeholder = "Messege"
            variant = "outlined"
            rows = {7}
            className = {classes.fieldStyle}
            onChange = {inputEvent}
            name  = "messege"
            value = {messege.messege}
        />
            <Button 
            type = "submit" 
            value = "submit" 
            startIcon = {<SendIcon/>} 
            variant = "contained" 
            color = "primary" 
            onClick = {onSubmit}
            className = {classes.btnStyle}>Send Messege</Button>
            </from>
        </Grid>
    </Grid>
    <Grid container className = {classes.mapContainer}>
        <MapComponent className = {classes.mapContainer}/>
    </Grid>
        </Container>
    </ThemeProvider>
    </>)
}
export default ContactPage;