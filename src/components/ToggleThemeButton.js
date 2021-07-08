import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

class ToggleThemeButton extends Component {
  render() {
    const { toggleTheme } = this.context;
    return (
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "33px",
          marginLeft: "auto",
        }}
      >
        Toggle Theme
      </button>
    );
  }
}

ToggleThemeButton.contextType = ThemeContext;

export default ToggleThemeButton;
