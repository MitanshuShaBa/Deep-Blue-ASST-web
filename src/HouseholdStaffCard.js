import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const HouseholdStaffCard = ({ name, photo_url }) => {
  return (
    <Card
      style={{
        minWidth: 100,
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Avatar style={{ alignSelf: "center" }} src={photo_url} />
        <Typography style={{ alignSelf: "center" }} variant="subtitle1">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HouseholdStaffCard;
