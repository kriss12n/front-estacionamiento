import { Grid,Card,Icon, Typography } from '@material-ui/core'
import React from 'react'
import style from "./styles";

export const CardItem = ({cantidad,icono,nombre}) => {

  const classes = style();

    return (
        <Grid item xs={12} md={6} >
           <Card className={classes.cardLayout} >
              <Grid container spacing={1}>
                  <Grid item className={classes.cardText} >
                    <Grid container spacing={0}>
                        <Grid item xs={12} >
                          <Typography variant="h4" color="initial" align="center">{cantidad}</Typography>
                        </Grid>
                        <Grid item xs={12} >
                          <Typography variant="body1" color="initial"align="center">{nombre}</Typography>
                          </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.cardIcon} >
                   <Icon className={classes.icon} >{icono}</Icon>
                    </Grid>
              </Grid>
           </Card>
        </Grid>
    )
}
