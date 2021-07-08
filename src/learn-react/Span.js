import React, { Component } from "react";

class Span extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  componentWillUnmount() {
    console.log("[Span.js] componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("[Span.js] componentDidUpdate", this.props.value);
  }

  componentDidMount() {
    console.log("[Span.js] componentDidMount", this.props.value);
  }

  render() {
    console.log("[Span.js] rendering...", this.props.value);
    return (
      <span
        style={{
          border: "1px solid #fff",
          margin: "0 10px 10px 0",
          padding: "10px",
        }}
      >
        {this.props.value}
      </span>
    );
  }
}

export default Span;
