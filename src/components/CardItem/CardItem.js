import React from "react";
import "./CardItem.scss";
import { withNaming } from "@bem-react/classname";

const cn = withNaming({ n: "", e: "__", m: "--", v: "_" });
const b = cn("card-item");

const getMiceCountText = miceCount => {
  if (miceCount === 1) {
    return "мышь";
  }

  if (miceCount % 100 >= 11 && miceCount % 100 <= 14) {
    return "мышей";
  }

  switch (miceCount % 10) {
    case 1:
      return "мышь";
    case 2:
    case 3:
    case 4:
      return "мыши";
    default:
      return "мышей";
  }
};

const getServingsCountText = servingsCount => {
  if (servingsCount % 100 >= 11 && servingsCount % 100 <= 14) {
    return "порций";
  }

  switch (servingsCount % 10) {
    case 1:
      return "порция";
    case 2:
    case 3:
    case 4:
      return "порции";
    default:
      return "порций";
  }
};

const getDescription = (status, filling, description) => {
  switch (status) {
    case "disabled":
      return `Печалька, ${filling} закончился`;
    case "selected":
      return description;
    case "default":
      return (
        <span>
          Чего сидишь? Порадуй котэ, <a href="#">купи</a>.
        </span>
      );
  }
};

const CardItem = ({
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
}) => {
  return (
    <div className={`${b({ [status]: true })} ${className}`} onClick={onSelect}>
      <div className={b("container")}>
        <div className={b("top-wrapper")}>
          <p className={b("type")}>{type}</p>
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
            src="assets/images/picture@1x.png"
            width="314"
            height="272"
            srcSet="assets/images/picture@2x.png 2x"
            alt="Изображение продукта."
          />
        </div>
        <p className={b("weight-wrapper")}>
          <span className={b("weight-amount")}>{weight.toLocaleString()}</span>{" "}
          кг
        </p>
      </div>
      <p className={b("description")}>
        {getDescription(status, filling, description)}
      </p>
    </div>
  );
};

export default CardItem;
