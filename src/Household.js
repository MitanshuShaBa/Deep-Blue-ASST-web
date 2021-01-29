import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Cards from "./Card.js";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  Card: {
    backgroundColor: "#F0F0F0",
  },
  homeTypography: {
    paddingTop: 25,
    paddingRight: 25,
    paddingLeft: 30,
    align: "justify",
  },
  Grid: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Household() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.Grid}>
        <Grid Item xs={0} sm={1} />
        <Grid Item sm={10}>
          <Card className={classes.root}>
            <CardContent className={classes.Card}>
              <div style={{ display: "flex", padding: 10 }}>
                <Avatar style={{ marginRight: 20 }} src="src\images\user.jpg" />
                <Typography variant="h5" component="h2">
                  Mitanshu Reshamwala (Me)
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Show Address</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid Item xs={0} sm={1} />
      </Grid>

      <Grid container direction="column" className={classes.Grid}>
        <Grid item container>
          <Grid Items sm={2} xs={0} />
          <Grid Items xs={6} sm={2}>
            <Cards
              title="My Family"
              myButton="+Add Family"
              AvatarSrc="https://img.icons8.com/plasticine/452/family.png"
            />
          </Grid>
          <Grid Items xs={6} sm={2}>
            <Typography className={classes.homeTypography}>
              <justify>
                Add Adults to help manage visitors and household and add
                children to ensure their security
              </justify>
            </Typography>
          </Grid>
          <Grid Items xs={6} sm={2}>
            <Cards
              title="My Daily Help"
              myButton="+Add Help"
              AvatarSrc="https://cdn3.iconfinder.com/data/icons/cleaning-service-filled-color/300/42315706Untitled-3-512.png"
            />
          </Grid>
          <Grid Items xs={6} sm={2}>
            <Typography className={classes.homeTypography}>
              <justify>
                Add Domestic staff that comes daily to help you.Get notified
                about their entry or exit and easily track the attendance
              </justify>
            </Typography>
          </Grid>
          <Grid Items sm={2} xs={0} />
          <Grid Items sm={2} xs={0} />
          <Grid Items xs={6} sm={2}>
            <Cards
              title="My Vehicle"
              myButton="+Add Vehicle"
              AvatarSrc="https://cdn3.iconfinder.com/data/icons/auto-workshop-filled-color/300/16333048Untitled-3-512.png"
            />
          </Grid>
          <Grid Items xs={6} sm={2}>
            <Typography className={classes.homeTypography}>
              <justify>
                Add your vehicle for easy identification in your community
              </justify>
            </Typography>
          </Grid>
          <Grid Items xs={6} sm={2}>
            <Cards
              title="My Guest"
              myButton="+Add Guest"
              AvatarSrc="data:image/png;base64,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"
            />
          </Grid>
          <Grid Items xs={6} sm={2}>
            <Typography className={classes.homeTypography}>
              Add guests that are going to stay for a longer time period
            </Typography>
          </Grid>
          <Grid Items sm={2} xs={0} />
        </Grid>
      </Grid>
    </>
  );
}
