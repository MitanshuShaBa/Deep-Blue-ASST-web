import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Avatar, CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    Width: 150,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    backgroundColor: "#F0F0F0",
  },
  pos: {
    marginBottom: 12,
  },
  Card: {
    backgroundColor: "#F0F0F0",
  },
  title: {
    fontSize: 10,
  },
});

const Cards = (props) => {
  const classes = useStyles();
  const { AvatarSrc, myButton, title } = props;
  return (
    <Card style={{ width: 200, marginBottom: 30 }}>
      <CardHeader title={title} className={classes.Card} />
      <CardContent>
        <center>
          <Avatar src={AvatarSrc} />
        </center>
      </CardContent>
      <CardActions className={classes.Card}>
        <center>
          <Button>{myButton}</Button>
        </center>
      </CardActions>
    </Card>
  );
};
export default Cards;
