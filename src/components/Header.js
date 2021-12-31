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
      >
        <div>
          <h1>Let's play Tic-Tac-Toe</h1>
          <ToggleThemeButton />
        </div>
      </header>
    );
  }
}

Header.contextType = ThemeContext;
export default Header;
