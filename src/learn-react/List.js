import React, { Component } from "react";
import Container from "../components/Container";
import Items from "./ItemsContext";
import ListItem from "./ListItem";

export default class List extends Component {
  state = {
    items: [],
    deleteListItem: this.deleteListItem.bind(this),
    addNewItem: this.addNewItem.bind(this),
  };

  componentDidMount() {
    console.log("[List.js] componentDidMount");
  }

  deleteListItem(id) {
    const items = this.state.items.slice();
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
    this.setState({ items: items });
    console.log("some changes in [List.js]");
  }

  addNewItem() {
    this.setState({
      items: this.state.items.concat([
        { task: `new Item ${this.state.items.length}`, id: Math.random() },
      ]),
    });
  }

  render() {
    return (
      <Container>
        <h1>Rendering list</h1>
        <Items.Provider value={this.state}>
          <ul
            key="ullist"
            style={{ padding: "0" }}
            onClick={this.addNewItem.bind(this)}
          >
            {this.state.items.map((item) => (
              <ListItem key={item.id} value={item} />
            ))}
          </ul>
        </Items.Provider>
      </Container>
    );
  }
}
