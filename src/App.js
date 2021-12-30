import './App.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as MinusButtonIcon } from './assets/minus-button.svg'
import { ReactComponent as PlusButtonIcon } from './assets/plus-button.svg'
import { ReactComponent as RedoButtonIcon } from './assets/redo-solid.svg'


function App() {
  
  var styles = {
    container: {
      width: '50vw', 
      minWidth: '500px',
      margin: '12vh auto 0',
    },
    
    counterDisplay: {
      backgroundColor: '#2A2E2F', 
      height: '45vh',
      position: 'relative',
      display: 'flex'
    },

    counterNumber: {
      color: 'white', 
      fontWeight: 700, 
      fontSize: '125px',
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    },

    resetCounterButton: {
      position: 'absolute', 
      right: '0px', 
      top: '0px', 
      margin: '12px 12px 0 0'
    },

    counterButtonsPaper: {
      backgroundColor: '#2A2E2F', 
      height: '25vh', 
    },

    counterButtons: {
      height: '100%', 
      width: '100%'
    }
  }

  return (
    <Box>
      <Grid container spacing={1} sx={styles.container}>   
        <Grid item xs={12}>
          <Paper elevation={3} sx={styles.counterDisplay}>
            <IconButton sx={styles.resetCounterButton}>
              <RedoButtonIcon className="resetCounterButtonIcon"/>
            </IconButton>
            <Typography variant="h1" component="h1" sx={styles.counterNumber}>
                12
            </Typography>
          </Paper>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={6}>
              <Paper elevation={3} sx={styles.counterButtonsPaper}>
                <Button sx={styles.counterButtons}>
                  <MinusButtonIcon className="counterButtonsIcon"/>
                </Button>
              </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={styles.counterButtonsPaper}>
              <Button sx={styles.counterButtons}>
                  <PlusButtonIcon className="counterButtonsIcon"/>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
