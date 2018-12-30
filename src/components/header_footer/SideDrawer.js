import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

//material UI Icons
import ReleaseIcon from "@material-ui/icons/Schedule";
import InfoIcon from "@material-ui/icons/Info";
import HLIcon from "@material-ui/icons/Highlight";
import PriceIcon from "@material-ui/icons/AttachMoney";
import LocationIcon from "@material-ui/icons/LocationOn";

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });
    props.onClose(false);
  };

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <List component="nav">
          <ListItem button onClick={() => scrollToElement("Featured")}>
            <ReleaseIcon style={{ fontSize: "30px", marginRight: "10px" }} />{" "}
            Release Starts in
          </ListItem>
          <ListItem button onClick={() => scrollToElement("info")}>
            <InfoIcon style={{ fontSize: "30px", marginRight: "10px" }} />{" "}
            MacBook Info
          </ListItem>
          <ListItem button onClick={() => scrollToElement("highlights")}>
            <HLIcon style={{ fontSize: "30px", marginRight: "10px" }} />{" "}
            Highlights
          </ListItem>
          <ListItem button onClick={() => scrollToElement("pricing")}>
            <PriceIcon style={{ fontSize: "30px", marginRight: "10px" }} />{" "}
            Pricing
          </ListItem>
          <ListItem button onClick={() => scrollToElement("location")}>
            <LocationIcon style={{ fontSize: "30px", marginRight: "10px" }} />{" "}
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
