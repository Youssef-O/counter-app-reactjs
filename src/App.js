import './App.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
    },

    counterButtons: {
      backgroundColor: '#2A2E2F', 
      height: '25vh', 
    }
  }

  return (
    <div className="App">
      <Grid container spacing={1} sx={styles.container}>   
        <Grid item xs={12}>
          <Paper elevation={3} sx={styles.counterDisplay}>
        
          </Paper>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={6}>
              <Paper elevation={3} sx={styles.counterButtons}>
          
              </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={styles.counterButtons}>
        
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
