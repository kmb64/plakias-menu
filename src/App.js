import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Blender Pro',
      'sans-serif',
    ].join(','),
    htmlFontSize: 14,
    fontSize: 12, //Mainly for inputs, to prevent zoom in on mobile devices
    subtitle1: {
      color: '#1f2532'
    },
    button: {
      textTransform: 'none',
      fontSize: '12'
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    color: '#fff',
  },
  white: {
    color: '#fff',
    backgroundColor: '#fff',
    width: '50%',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="landing">
      <Container maxWidth="lg">
        <div className="container-fluid cover-container">
          <div className="hero-container">
            <Typography align="center" variant="h2">PLAKIAS</Typography>
            <Typography align="center"  variant="h6">Πλακιάς</Typography>

            <List className={classes.root}>
              <ListItem>
                <ListItemText primary="Saganaki" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Freemantle Octupus" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Warm olives"/>
              </ListItem>
            </List>
            <Divider className={classes.white} />
            <List className={classes.root}>
              <ListItem>
                <ListItemText primary="Lamb Souvlaki" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bourdeto - Baked fish" />
              </ListItem>
            </List>
            <Divider className={classes.white} />
            <List className={classes.root}>
              <ListItem>
                <ListItemText primary="Baklava Puffs"/>
              </ListItem>
            </List>
            <Divider className={classes.white} />
            <List className={classes.root}>
              <ListItem>
                <ListItemText primary="Ouzo" />
              </ListItem>
            </List>
            <Divider className={classes.white} />
          </div>
        </div>
      </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
