import { Grid,Card,Icon, Typography } from '@material-ui/core'
import React from 'react'

export const CardItem = ({cantidad,icono,nombre}) => {
    return (
        <Grid item xs={12} md={6} >
           <Card>
              <Grid container spacing={1}>
                  <Grid item >
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <Typography variant="h4" color="initial">{cantidad}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body1" color="initial">{nombre}</Typography>
                          </Grid>
                    </Grid>
                  </Grid>
                  <Grid item >
                   <Icon>{icono}</Icon>
                    </Grid>
              </Grid>
           </Card>
        </Grid>
    )
}
