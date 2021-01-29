import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, CardHeader } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles({
  card: {
    width: "29vw",
    marginRight: 10,
    marginLeft: 20,
  },
  typography: {
    display: "flex",
  },
});

const Homecards = (props) => {
  const classes = useStyles();
  const { title, subheader, typography } = props;
  return (
    <Card className={classes.card} variant="outlined">
      <CardHeader
        avatar={
          <Avatar src="https://image.flaticon.com/icons/png/128/3590/3590452.png" />
        }
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <div className={classes.typography}>
          <PersonIcon style={{ paddingRight: 5 }} fontSize="small" />
          <Typography>{typography}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export default Homecards;
