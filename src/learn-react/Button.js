import React, { Component } from "react";
import Items from "./ItemsContext";

class Button extends Component {
  componentDidUpdate() {
    console.log("[Button.js] componentDidUpdated");
  }

  componentDidMount() {
    console.log("[Button.js] componentDidMount");
  }

  componentWillUnmount() {
    console.log("[Button.js] componentWillUnmount");
  }

  render() {
    console.log("[Button.j] rendering.");

    const style = {
      marginLeft: "30px",
      border: "1px solid #cde",
      borderRadius: "5px",
      cursor: "pointer",
    };
    return (
      <Items.Consumer>
        {({ _, deleteListItem }) => (
          <button
            style={style}
            onClick={(e) => {
              e.stopPropagation();
              deleteListItem(this.props.listItemId);
            }}
          >
            Delete
          </button>
        )}
      </Items.Consumer>
    );
  }
}

export default Button;
