import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Avatar, CardHeader, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import PersonIcon from "@material-ui/icons/Person";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { db } from "./firebase.js";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: "60vw",
    margin: 30,
    border: "1px solid",
  },
  title: {
    fontSize: 10,
  },
  small: {
    width: "20px",
    height: "20px",
  },
  hr: {
    height: 2,
    padding: 20,
    top: 20,
  },
  typography: {
    display: "flex",
    alignItems: "center",
  },
  Divider: {},
});

const Activitycards = ({
  myButton2,
  myButton3,
  subheader,
  typography3,
  purpose,
  user_id,
  temperature,
  is_wearing_mask,
}) => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({ name: "Loading..." });
  useEffect(() => {
    let retries = 5;

    while (retries-- > 0) {
      if (getUserInfo(user_id)) {
        // console.log(retries);
        break;
      }
    }
  }, [user_id]);
  const getUserInfo = (user_id) => {
    // console.log("trying", user_id);
    if (user_id) {
      // console.log("has userid");
      db.collection("users")
        .doc(user_id)
        .get()
        .then((doc) => {
          setUserInfo(doc.data());
          // console.log(doc.data());
          return true;
        })
        .catch((err) => {
          // console.log("err", err);
          return false;
        });
    } else {
      setTimeout(() => {}, 1000);
    }
  };

  return (
    <Card className={classes.card} variant="outlined">
      <CardHeader
        avatar={
          <Avatar src="https://image.flaticon.com/icons/png/128/3590/3590452.png" />
        }
        title={purpose}
        subheader={subheader}
      ></CardHeader>
      <Divider variant="middle" />
      <CardContent>
        <div className={classes.typography}>
          <Avatar src={userInfo.photo_url} className={classes.small} />
          <Typography>{userInfo.name}</Typography>
        </div>
        <div className={classes.typography}>
          <ChatOutlinedIcon style={{ paddingRight: 5 }} fontSize="small" />
          <Typography>
            Temp - {temperature} | Mask- {is_wearing_mask ? "Yes" : "No"}
          </Typography>
        </div>
        <div className={classes.typography}>
          <PersonOutlineOutlinedIcon
            style={{ paddingRight: 5 }}
            variant="small"
          />
          <Typography>{typography3}</Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.Card} style={{ display: "flex" }}>
        <IconButton>
          <CallIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <Button>
          <NotInterestedIcon style={{ paddingRight: 5 }} />
          {myButton2}
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button>
          <Avatar
            src="https://image.shutterstock.com/image-vector/id-card-icon-user-identity-260nw-516445126.jpg"
            height="10"
            style={{ paddingRight: 5 }}
          />
          {myButton3}
        </Button>
      </CardActions>
    </Card>
  );
};
export default Activitycards;
