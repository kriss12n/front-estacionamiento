import { Container } from '@material-ui/core'
import React from 'react'
import style from '../auth/style'
export const ParkingScreen = () => {

    const classes = style();

    return (
        <Container className={classes.root}>
                <h1>Hola como estamos</h1>
        </Container>
    )
}
