import { Button, Container, Grid, Hidden, TextField, Typography,CssBaseline } from '@material-ui/core'
import { DriveEta } from "@material-ui/icons";
import React from 'react'
import styles from './style';

export const LoginScreen = ({history}) => {

  const classes = styles();


const handleLogin = () =>{

  history.replace('/');

}

    return (
     <>
      <CssBaseline />
         <Container maxWidth="xl" className={classes.root} >
           
           <Grid container>
                <Grid item xs={12} md={5} className={`${classes.gridForm} animate__animated animate__fadeInDown`} >
                   <Typography variant="h3" align="center" color="initial" className={classes.title}>  <DriveEta style={{ fontSize: 36 }}/>Parking app</Typography>
                    <form action="">
                        <TextField 
                        autoComplete="false"
                          className={classes.textFieldLogin}
                          id="email"
                          label="Correo electronico"
                          variant="outlined"
                        />
                        <TextField
                        autoComplete="false"
                          className={classes.textFieldLogin}
                          id="password"
                          label="Contraseña"
                          variant="outlined"
                        />
                        <Button variant="contained" color="secondary" onClick={handleLogin} className={classes.buttonLogin}>
                          Iniciar Sesion
                        </Button>
                    </form>
                    <Typography variant="body2" align="center" color="initial">&copy; Desarrollador por Cesar y asociados</Typography>
                </Grid>
                <Hidden xsDown>
                  <Grid item md={7} className="animate__animated animate__fadeIn">
                          <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="imagen" className={classes.img} />
                  </Grid>
                </Hidden>    
           </Grid>
       </Container></>  
    )
}
