import React, {useState} from "react";
import {CarPropTypes} from "../../prop-types";
import Specification from "../specification/specification";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";
import "./tabs.scss";

const TabsName = {
  SPECIFICATION: "SPECIFICATION",
  REVIEWS: "REVIEWS",
  CONTACTS: "CONTACTS",
};

const getActiveTabElement = (activeTab, car) => {
  switch (activeTab) {
    case TabsName.SPECIFICATION:
      return <Specification car={car} />;
    case TabsName.REVIEWS:
      return <Reviews />;
    case TabsName.CONTACTS:
      return <Contacts />;
    default:
      return;
  }
};

const Tabs = (props) => {
  const {car} = props;
  const [activeTab, setActiveTab] = useState(TabsName.SPECIFICATION);

  const HandleSpecificationButtonClick = () => {
    setActiveTab(TabsName.SPECIFICATION);
  };

  const HandleReviewsButtonClick = () => {
    setActiveTab(TabsName.REVIEWS);
  };

  const HandleContactsButtonClick = () => {
    setActiveTab(TabsName.CONTACTS);
  };

  return (
    <div className="tabs car-screen__tabs">
      <ul className="tabs__list">
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsName.SPECIFICATION && "tabs__button--active"
            }`}
            type="button"
            onClick={HandleSpecificationButtonClick}
          >
            Характеристики
          </button>
        </li>
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsName.REVIEWS && "tabs__button--active"
            }`}
            type="button"
            onClick={HandleReviewsButtonClick}
          >
            Отзывы
          </button>
        </li>
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsName.CONTACTS && "tabs__button--active"
            }`}
            type="button"
            onClick={HandleContactsButtonClick}
          >
            Контакты
          </button>
        </li>
      </ul>
      {getActiveTabElement(activeTab, car)}
    </div>
  );
};

Tabs.propTypes = {
  car: CarPropTypes,
};

export default Tabs;
