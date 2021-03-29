import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import moment from "moment";
import PropTypes from "prop-types";
import ReviewPopup from "../review-popup/review-popup";
import {CarReviewsPropTypes} from "../../prop-types";
import {reviews as reviewsMocks} from "../../mocks/reviews";
import "moment/locale/ru";
import "./reviews.scss";

export const MAX_RATING = 5;

moment.locale("ru");

const getRatingElements = (maxRating, ratingValue) => {
  const ratingElements = [];
  let className;

  for (let i = 1; i <= maxRating; i++) {
    ratingValue >= i ? (className = "active") : (className = "inactive");

    ratingElements.push(
      <li className={`reviews__star reviews__star--${className}`} key={i}>
        <span className="visually-hidden">{i}</span>
      </li>
    );
  }

  return ratingElements;
};

const Reviews = (props) => {
  const {carReviews, onLoadCarReviews} = props;

  useEffect(() => {
    onLoadCarReviews(reviewsMocks.find((item) => (item.carId = 1)).carReviews);
  }, [onLoadCarReviews]);

  return (
    <>
      <section className="reviews tabs__reviews">
        {carReviews.length ? (
          <ul className="reviews__list">
            {carReviews.map((review) => (
              <li className="reviews__item" key={review.id}>
                <h3 className="reviews__author">{review.author}</h3>
                <div className="reviews__plus">
                  <h4 className="reviews__title reviews__title--plus">
                    Достоинства
                  </h4>
                  <p className="reviews__content">{review.plus}</p>
                </div>
                <div className="reviews__minus">
                  <h4 className="reviews__title reviews__title--minus">
                    Недостатки
                  </h4>
                  <p className="reviews__content">{review.minus}</p>
                </div>
                <div className="reviews__comment">
                  <h4 className="reviews__title reviews__title--comment">
                    Комментарий
                  </h4>
                  <p className="reviews__content">{review.comment}</p>
                </div>
                <div className="reviews__rating">
                  <ul
                    className="reviews__stars"
                    aria-label={`Рейтинг — ${review.rating}`}
                  >
                    {getRatingElements(MAX_RATING, review.rating)}
                  </ul>
                  <span className="reviews__advice">Советует</span>
                </div>
                <div className="reviews__bottom">
                  <p className="reviews__date">
                    {moment(review.date).locale("ru").fromNow()}
                  </p>
                  <button className="reviews__reply" type="button">
                    Ответить
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <span className="reviews__blank">Отзывов нет</span>
        )}
        <button className="reviews__review-button">Оставить отзыв</button>
      </section>
      <ReviewPopup />
    </>
  );
};

Reviews.propTypes = {
  carReviews: CarReviewsPropTypes,
  onLoadCarReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  carReviews: store.carReviews,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCarReviews(reviews) {
    dispatch(ActionCreator.loadCarReviews(reviews));
  },
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
