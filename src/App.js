import React from "react";
import { withNaming } from "@bem-react/classname";
import "./App.scss";
import { items } from "./mocks/items";
import CardItem from "./components/CardItem/CardItem";

const cn = withNaming({ n: "", e: "__", m: "--", v: "_" });
const b = cn("App");

class App extends React.Component {
  state = {
    items
  };

  toggleItemSelect = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item["id"] === id && item["status"] !== "disabled") {
          return {
            ...item,
            status: item["status"] === "default" ? "selected" : "default"
          };
        }
        return item;
      })
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div className={b()}>
        <h1 className={b("title")}>Ты сегодня покормил кота?</h1>
        <div className={b("card-list")}>
          {items.map((item, index) => (
            <CardItem
              {...item}
              key={index}
              onSelect={() => this.toggleItemSelect(item["id"])}
              className={b("card-item")}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
