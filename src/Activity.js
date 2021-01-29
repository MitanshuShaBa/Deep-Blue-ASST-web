import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Activitycards from "./Activitycards.js";
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    customizeToolbar: {
      minHeight: 36,
      backgroundColor: "white",
    },
    Grid: {
      padding: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    Typography: {
      color: "black",
    },
    card: {
      width: "60vw",
    },
  })
);

export default function Activity() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.customizeToolbar}>
            <Button
              aria-controls="menu"
              onClick={handleOpenMenu}
              style={{ marginLeft: 20, marginRight: 20 }}
            >
              <FilterListIcon fontSize="medium" /> Filter
            </Button>

            <Menu
              style={{ marginTop: "35px" }}
              id="menu"
              onClose={handleMenuClose}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
            >
              <MenuItem>Filter By Name</MenuItem>
              <MenuItem>Filter By Date</MenuItem>
            </Menu>

            <MuiPickersUtilsProvider
              utils={DateFnsUtils}
              className={classes.Date}
            >
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-lbel": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Toolbar>
        </AppBar>
      </div>

      <Grid container className={classes.Grid}>
        <Activitycards
          title="Visiting Help"
          subheader="09:45 AM | Others"
          typography1="Dilshad"
          typography2="Temp- 97.1 Deg | Mask-on"
          typography3="Allowed by you"
          myButton1="<CallIcon/>"
          myButton2="Wrong Entry"
          myButton3="Gate Pass"
        />
        <Activitycards
          title="Visiting Help"
          subheader="09:39 AM | Others"
          typography1="Ganesh"
          typography2="Temp- 97.1 Deg | Mask-on"
          typography3="Allowed by you"
          myButton1="<CallIcon/>"
          myButton2="Wrong Entry"
          myButton3="Gate Pass"
        />
        <Activitycards
          title="Visiting Help"
          subheader="09:45 AM | Others"
          typography1="Suresh"
          typography2="Temp- 97.1 Deg | Mask-on"
          typography3="Allowed by guard RAVINDRA PRASAD SINGH"
          myButton1="<CallIcon/>"
          myButton2="Wrong Entry"
          myButton3="Gate Pass"
        />
      </Grid>
    </>
  );
}
