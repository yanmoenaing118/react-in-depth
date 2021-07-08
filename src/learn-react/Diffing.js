import React, { Component } from "react";
import Span from "./Span";
import styles from "./Diffing.module.css";
import Container from "../components/Container";
export default class Diffing extends Component {
  state = {
    values: Array(5).fill(5),
    grayColor: true,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }

  componentWillUnmount() {
    console.log("[Diffing.js] componentWillUnmount");
  }

  componentDidMount() {
    console.log("[Diffing.js] componentDidMount");
  }

  render() {
    console.log("[Diffing.js] rendering...");

    const style = this.state.grayColor ? styles.grayColor : styles.darkCyan;

    return (
      <Container>
        <div
          onClick={() => {
            const values = Array(this.state.values.length + 1).fill(5);
            values[values.length - 1] =
              this.state.values[this.state.values.length - 1] + 1;
            this.setState({
              grayColor: !this.state.grayColor,
              values: values,
            });
          }}
        >
          <h1 className={style}>React rendering Algorithm</h1>
          <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap" }}>
            {this.state.values.map((el, idx) => (
              <Span key={idx} value={el} />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}
