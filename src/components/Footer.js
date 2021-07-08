import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export default class Footer extends Component {
  render() {
    const { theme } = this.context;

    return (
      <footer
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <div>
          Copyright 2020 &copy;{" "}
          <a href="https://reactjs.org/tutorial/tutorial.html">
            React Tutorial
          </a>
        </div>
      </footer>
    );
  }
}

Footer.contextType = ThemeContext;
