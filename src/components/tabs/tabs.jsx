import React from "react";
import {CarPropTypes} from "../../prop-types";
import Specification from "../specification/specification";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";
import "./tabs.scss";

const Tabs = (props) => {
  const {car} = props;

  return (
    <div className="tabs car-screen__tabs">
      <ul className="tabs__list">
        <li className="tabs__item">
          <button className="tabs__button tabs__button--active" type="button">
            Характеристики
          </button>
        </li>
        <li className="tabs__item">
          <button className="tabs__button" type="button">
            Отзывы
          </button>
        </li>
        <li className="tabs__item">
          <button className="tabs__button" type="button">
            Контакты
          </button>
        </li>
      </ul>
      {car.name ? <Specification car={car} /> : ""}
      <Reviews />
      <Contacts />
    </div>
  );
};

Tabs.propTypes = {
  car: CarPropTypes,
};

export default Tabs;
