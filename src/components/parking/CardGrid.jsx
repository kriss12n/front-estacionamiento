import React from 'react'
import { Grid } from '@material-ui/core'
import { CardItem } from "./CardItem";
export const CardGrid = () => {

    const data = [

        {
            id:1,
            nombre:'Estacionamientos ocupados',
            cantidad:'10',
            icono:''
        },
        {
            id:2,
            nombre:'Estacionamientos disponibles',
            cantidad:'30',
            icono:''
        },
        {
            id:3,
            nombre:'Total de estacionamientos',
            cantidad:'40',
            icono:''
        },
        {
            id:4,
            nombre:'Recaudado hoy',
            cantidad:'5000',
            icono:''
        }

    ];

    return (
        <Grid container spacing={1}>
              {
                  data.map((card)=>(
                      <CardItem 
                      key={card.id}
                      {...card}
                      />
                  ))   
              }
        </Grid> 
            
    )
}
