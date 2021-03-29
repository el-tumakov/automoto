import React, {useState} from "react";
import {CarReviewsPropTypes} from "../../prop-types";
import {MAX_RATING} from "../reviews/reviews";
import "./review-popup.scss";

const getRatingRadioElements = (maxRating, ratingValue, handleChange) => {
  const ratingElements = [];
  let className;

  for (let i = 1; i <= maxRating; i++) {
    ratingValue >= i ? (className = "active") : (className = "inactive");

    ratingElements.push(
      <>
        <label
          className={`review-popup__rating review-popup__rating--${className}`}
          htmlFor={`review-popup__rating-${i}`}
        >
          <span className="visually-hidden">{`Рейтинг – ${i}`}</span>
        </label>
        <input
          className="visually-hidden"
          id={`review-popup__rating-${i}`}
          type="radio"
          name="review-popup__rating"
          value={i}
          onChange={handleChange}
        />
      </>
    );
  }

  return ratingElements;
};

const ReviewPopup = (props) => {
  const {carReviews} = props;
  const [ratingValue, setRatingValue] = useState(0);

  const handleChange = (evt) => {
    setRatingValue(evt.target.value);
  };

  return (
    <section className="review-popup">
      <div className="review-popup__wrap">
        <h2 className="review-popup__title">Оставить отзыв</h2>
        <form className="review-popup__form">
          <div className="review-popup__form-wrap">
            <div className="review-popup__left-side">
              <label className="visually-hidden" htmlFor="author">
                Напишите ваше имя
              </label>
              <input
                className="review-popup__input review-popup__input--author"
                id="review-popup__author"
                type="text"
                name="review-popup__author"
                placeholder="Имя"
                required
              />
              <label className="visually-hidden" htmlFor="plus">
                Опишите достоинства товара
              </label>
              <input
                className="review-popup__input review-popup__input--plus"
                id="review-popup__plus"
                type="text"
                name="review-popup__plus"
                placeholder="Достоинства"
              />
              <label className="visually-hidden" htmlFor="minus">
                Опишите недостатки товара
              </label>
              <input
                className="review-popup__input review-popup__input--minus"
                id="review-popup__minus"
                type="text"
                name="review-popup__minus"
                placeholder="Недостатки"
              />
            </div>
            <div className="review-popup__right-side">
              <div className="review-popup__rating-wrap">
                <span className="review-popup__rating-label">
                  Оцените товар:
                </span>
                {getRatingRadioElements(MAX_RATING, ratingValue, handleChange)}
              </div>
              <label className="visually-hidden">Оставьте комментарий</label>
              <textarea
                className="review-popup__input review-popup__input--comment"
                name="review-popup__comment"
                id="review-popup__comment"
                placeholder="Комментарий"
                required
              ></textarea>
            </div>
          </div>
          <button className="review-popup__submit" type="submit">
            Оставить отзыв
          </button>
        </form>
        <button className="review-popup__close" type="button">
          <span className="visually-hidden">Закрыть окно</span>
        </button>
      </div>
    </section>
  );
};

ReviewPopup.propTypes = {
  carReviews: CarReviewsPropTypes,
};

export default ReviewPopup;
