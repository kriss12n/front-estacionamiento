import React from 'react'
import { Button, Container, Grid, Typography } from "@material-ui/core";
import {  AddCircleOutline } from "@material-ui/icons";
import styles from "./styles";


export const WorkersScreen = () => {

    const classes = styles();

    return (
        <Container maxWidth="xl" className={classes.root}>
            
            <Grid container spacing={1} direction="row" justify="space-between">
                <Grid item xs={12} md={3}>
                     <Typography variant="h4" color="initial" style={{color:'white'}} >Trabajadores</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button startIcon={<AddCircleOutline />} variant="contained" color="primary" >
                        Agregar Trabajador
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </Container>
    )
}

