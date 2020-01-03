import React from "react";
import "./App.scss";
import { items } from "./mocks/items";
import CardItem from "./components/CardItem/CardItem";

class App extends React.Component {
  state = {
    items
  }

  render() {
    const {items} = this.state;

    return (
      <div className="App">
        {items.map((item, index) => <CardItem {...item} key={index} />)}
      </div>
    );
  }
}

export default App;
