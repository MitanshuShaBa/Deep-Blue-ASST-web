import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography"; 
import { Avatar, Card, CardContent, Container } from "@material-ui/core";

 

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
   
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  card: {
    width: "200px",
    marginTop: "15vh",
  },
}));

export default function Community() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Card className={classes.card}>
          <CardContent className={classes.cards}>
            <Avatar src="https://image.flaticon.com/icons/png/512/61/61054.png" />
            <Typography variant="body1" style={{ marginTop: "1vh" }}>
              Opinion Polls
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent className={classes.cards}>
            <Avatar src="data:image/png;base64,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" />
            <Typography variant="body1" style={{ marginTop: "1vh" }}>
              Meetings
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent className={classes.cards}>
            <Avatar src="https://cdn2.iconfinder.com/data/icons/education-1-35/48/4-512.png" />
            <Typography variant="body1" style={{ marginTop: "1vh" }}>
              Documents
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
