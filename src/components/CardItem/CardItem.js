import React from "react";
import "./CardItem.scss";
import { withNaming } from "@bem-react/classname";
import { getMiceCountText, getServingsCountText } from "../../helpers/index";
import cat1x from "./../../assets/images/picture@1x.png";
import cat2x from "./../../assets/images/picture@2x.png";

const cn = withNaming({ n: "", e: "__", m: "--", v: "_" });
const b = cn("card-item");

export const getDescription = (status, filling, description) => {
  switch (status) {
    case "disabled":
      return `Печалька, ${filling} закончился`;
    case "selected":
      return description;
    case "default":
      return (
        <span>
          Чего сидишь? Порадуй котэ,{" "}
          <span className={b("link")}>
            <a href="#">купи</a>.
          </span>
        </span>
      );
  }
};

class CardItem extends React.Component {
  state = {
    mouseEnter: false,
    mouseLeaveAfterSelect: this.props.status === "selected"
  };

  handleMouseLeave = () => {
    const { status } = this.props;
    this.setState({
      mouseEnter: false,
      mouseLeaveAfterSelect: status === "selected"
    });
  };

  handleMouseEnter = () => this.setState({ mouseEnter: true });

  render() {
    const {
      type,
      title,
      filling,
      servingsCount,
      miceCount,
      additions,
      weight,
      description,
      status,
      onSelect,
      className
    } = this.props;

    const { mouseEnter, mouseLeaveAfterSelect } = this.state;

    return (
      <div className={`${b({ [status]: true })} ${className}`}>
        <div
          onClick={onSelect}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className={b("container")}
        >
          <div className={b("top-wrapper")}>
            <p className={b("type")}>
              {status === "selected" && mouseEnter && mouseLeaveAfterSelect
                ? "Котэ не одобряет?"
                : type}
            </p>
            <h2 className={b("title-wrapper")}>
              <span className={b("title-top")}>{title}</span>{" "}
              <span className={b("title-bottom")}>{filling}</span>
            </h2>
            <ul className={b("features-list")}>
              <li className={b("features-item")}>
                <b className={b("features-amount")}>{servingsCount}</b>
                {` ${getServingsCountText(servingsCount)}`}
              </li>
              <li className={b("features-item")}>
                <b className={b("features-amount")}>
                  {miceCount > 1 ? `${miceCount} ` : ``}
                </b>
                {`${getMiceCountText(miceCount)} в подарок`}
              </li>
              {additions.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className={b("image-wrapper")}>
            <img
              src={cat1x}
              width="314"
              height="272"
              srcSet={`${cat2x} 2x`}
              alt="Изображение продукта."
            />
          </div>
          <p className={b("weight-wrapper")}>
            <span className={b("weight-amount")}>
              {weight.toLocaleString()}
            </span>{" "}
            кг
          </p>
        </div>
        <p className={b("description")}>
          {getDescription(status, filling, description)}
        </p>
      </div>
    );
  }
}

export default CardItem;
