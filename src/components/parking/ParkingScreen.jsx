import { Container, Grid } from '@material-ui/core'
import React from 'react'
import style from './styles'
import {CardGrid} from './CardGrid';
export const ParkingScreen = () => {

    const classes = style();

    return (
        <Container maxWidth="xl" className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <CardGrid />
                    </Grid>
                    <Grid item xs={12}>
                      
                      </Grid>
                </Grid>
        </Container>
    )
}
