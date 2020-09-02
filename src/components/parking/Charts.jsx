import { Card, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Line, } from "react-chartjs-2";
import styles from "./styles";
export const Charts = () => {
    const classes = styles(); 
    const [data, setData] = useState({
        labels: [
            "01:00",
            "07:00",
            "13:00",
            "16:00",
            "19:00",
            "23:00",

        ],
        datasets: [
            {
                label: "Porcentaje de ocupado",
                data: [10, 60, 90,23, 56, 12,],
                backgroundColor: [
                    "rgba(11, 87, 211, 0.2)",
                ]
            }
        ]
    });

    return (
        <Grid item xs={12}>  
           <Card className={classes.cardLayout} >
              <Grid container spacing={2}>
                  <Grid item xs={12} style={{height:'50vh', width:'40vw'}}  >
                     <Line data={data}  options={{maintainAspectRatio: false,responsive:true }} />
                  </Grid>
              </Grid>
           </Card>
        </Grid>   
    );
};

