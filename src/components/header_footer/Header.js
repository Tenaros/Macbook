import React, { Component } from "react";

//Material ui
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

//Components
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  toogleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
            boxShadow: "none",
            padding: "10px 0px"
          }}
        >
          <ToolBar>
            <div className="header_logo">
              <div className="font_righteous header_logo_mac">
                MacBook Pro <i className="fab fa-apple" />
              </div>
              <div className="header_logo_title">New Release</div>
            </div>

            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => this.toogleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <SideDrawer
              open={this.state.drawerOpen}
              onClose={value => this.toogleDrawer(value)}
            />
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
