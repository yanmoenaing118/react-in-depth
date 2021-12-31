import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";
class Header extends Component {
  render() {
    const { theme } = this.context;
    console.log("[Header.js] updated v0.0.1");
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
