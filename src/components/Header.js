import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";
class Header extends Component {
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
