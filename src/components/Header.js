import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";
class Header extends Component {
  main() {
    console.log("changes made in main branch");
  }
  fun() {
    console.log("Header updtated");
  }
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
