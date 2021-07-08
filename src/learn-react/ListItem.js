import React, { Component } from "react";
import Button from "./Button";

export default class ListItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }

  componentWillUnmount() {
    console.log("[ListItem.js] componentWillUnmount");
  }

  render() {
    console.log("rendering", this.props.value);
    return (
      <li
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          letterSpacing: "2px",
          marginBottom: "16px",
          boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
          padding: "8px 12px",
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        {this.props.value.task}
        <Button listItemId={this.props.value.id} />
      </li>
    );
  }
}
