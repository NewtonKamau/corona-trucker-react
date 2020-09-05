import React from "react";
import {Card,CardContent,Typography,Grid, StylesProvider} from "@material-ui/core";
import styles from "./Cards.module.css";


const Cards = ({ data: { confirmed, recoveries, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number of Active Cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoveries
            </Typography>
            <Typography variant="h5">Real data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number of recovered Cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">Real data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">Death Cases of Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;