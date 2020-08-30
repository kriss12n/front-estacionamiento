import { Container, Typography } from '@material-ui/core'
import React from 'react'
import styles from "./style";

export const Building = () => {

    const classes = styles();

    return (
        <Container maxWidth="xl" className={classes.root} >
            <div>
                <Typography variant="h1" style={{color:'white'}} align="center" >Componente en construccion</Typography>
                <img className={classes.image}  src={require('../../assets/img/under_construction.png')} alt="en construccion"/>
            </div>
        </Container>
    )
}
