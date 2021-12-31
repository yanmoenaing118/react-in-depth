import React from "react";
import "./App.css";
import Container from "./components/Container";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import { ThemeContext, themes } from "./components/ThemeContext";
// import Game from "./components/TictactoeGame";
import Diffing from "./learn-react/Diffing";
import List from "./learn-react/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
  }

  // toggleTheme = () => {
  //   console.log("toogle");
  //   this.setState((state) => ({
  //     theme: state.theme === themes.dark ? themes.light : themes.dark,
  //   }));
  // };

  state = {
    renderDiffing: true,
    renderList: true,
  };
  componentDidMount() {
    console.log("some changes in [App.js]");
  }

  componentDidUpdate() {
    console.log("[App.js] updated!!!");
  }
  render() {
    console.log("[App.js] rendering...");
    const style = {
      marginLeft: "30px",
      border: "1px solid #cde",
      borderRadius: "5px",
      padding: "8px 16px",
    };
    return (
      <>
        <header>
          <Diffing />
          <Container>
            <h1>DiffingAlgorithm</h1>
            <div className="DiffingHeader">
              <button
                style={style}
                onClick={() =>
                  this.setState({ renderDiffing: !this.state.renderDiffing })
                }
              >
                {this.state.renderDiffing ? "Hide Diffing" : "Show Diffing"}
              </button>

              <button
                style={style}
                onClick={() =>
                  this.setState({ renderList: !this.state.renderList })
                }
              >
                {this.state.renderList ? "Hide List" : "Show List"}
              </button>
            </div>
          </Container>
        </header>
        {this.state.renderDiffing ? <Diffing /> : null}
      </>
    );
  }
}

export default App;
