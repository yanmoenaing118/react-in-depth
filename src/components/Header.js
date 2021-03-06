import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";
class Header extends Component {
  fun() {
    console.log("Header updtated");
  }
  constructor(props) {
    console.log("Hello");
    super(props);
  }
  render() {
    const { theme } = this.context;
    console.log(theme);
    return (
      <header
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
        }}
      ></header>
    );
  }
}

Header.contextType = ThemeContext;
export default Header;
