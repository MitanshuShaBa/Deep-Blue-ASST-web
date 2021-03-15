import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Homecards from "./Homecards.js";
import Grid from "@material-ui/core/Grid";
import { Card, Button, Typography, Avatar } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActions";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grid: {
    margin: 40,
  },
  home: {
    display: "flex",
  },
  Card: {
    margin: 20,
  },
  icons: {
    marginRight: "21%",
  },
  icon1: {
    marginRight: "19%",
  },
  hover: {
    "&:hover": {
      color: "#f00",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <br />
      <br />
      <br />
      <Grid className={classes.grid}>
        <Card variant="outlined" className={classes.Card}>
          <CardActionArea>
            <Button
              className={classes.icons}
              startIcon={
                <Avatar src="data:image/png;base64,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" />
              }
            >
              Security Alert{" "}
            </Button>
            <Button
              className={classes.icon1}
              startIcon={
                <Avatar src="https://thumbs.dreamstime.com/b/deliveryvanfree-195579272.jpg" />
              }
            >
              Pre-Approve Delivery
            </Button>
            <Button
              startIcon={
                <Avatar src="https://user-images.githubusercontent.com/15840617/31617371-ae68471e-b297-11e7-9981-269c9bb17330.png" />
              }
            >
              Local Services
            </Button>
          </CardActionArea>
        </Card>

        <Typography variant="h4" style={{ paddingTop: 20, paddingBottom: 10 }}>
          RECENT ACTIVITY
        </Typography>
        <Grid className={classes.home}>
          <Link to="/activity" style={{ textDecoration: "none" }}>
            <Homecards
              title="Visiting Help"
              subheader="09:45 AM | Others"
              typography="Dilshad"
            />
          </Link>
          <Link to="/activity" style={{ textDecoration: "none" }}>
            <Homecards
              title="Visiting Help"
              subheader="09:39 AM | Others"
              typography="Ganesh"
            />
          </Link>
          <Link to="/activity" style={{ textDecoration: "none" }}>
            <Homecards
              title="Visiting Help"
              subheader="09:45 AM | Others"
              typography="Suresh"
            />
          </Link>
        </Grid>
        <Typography variant="h4" style={{ paddingTop: 20, paddingBottom: 5 }}>
          ANNOUNCEMENTS
        </Typography>

        <Card variant="outlined" className={classes.Card}>
          <CardContent>
            <div style={{ padding: 10 }}>
              <Typography variant="h6">
                Access all important announcements, notices and circulars here
              </Typography>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </div>
  );
}
