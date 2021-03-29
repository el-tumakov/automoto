import React, {useState} from "react";
import {CarImagesPropTypes} from "../../prop-types";
import "./car-slider.scss";

const CarSlider = (props) => {
  const {carsImages} = props;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return carsImages ? (
    <section className="car-slider car-screen__slider">
      <h2 className="visually-hidden">Фотографии Марпех 11</h2>
      <picture className="car-slider__picture">
        <source
          type="image/webp"
          srcSet={`${carsImages.desktop.webp.x1[activeSlideIndex]} 1x, 
          ${carsImages.desktop.webp.x2[activeSlideIndex]} 2x`}
        />
        <img
          className="car-slider__main-image"
          src={carsImages.desktop.jpg.x1[activeSlideIndex]}
          srcSet={`${carsImages.desktop.jpg.x2[activeSlideIndex]} 2x`}
          width="600"
          height="375"
          alt={carsImages.alts[activeSlideIndex]}
        />
      </picture>
      <div className="car-slider__controls">
        <button
          className="car-slider__control car-slider__control--left"
          type="button"
          disabled
        >
          <span className="visually-hidden">Листать слайдер влево</span>
        </button>
        <ul className="car-slider__images">
          {carsImages.alts.map((item, index) => (
            <li className="car-slider__item" key={index}>
              <picture className="car-slider__preview-picture">
                <source
                  type="image/webp"
                  srcSet={`${carsImages.previews.webp.x1[index]} 1x, ${carsImages.previews.webp.x2[index]} 2x`}
                />
                <img
                  className="car-slider__preview"
                  src={carsImages.previews.jpg.x1[index]}
                  srcSet={`${carsImages.previews.jpg.x2[index]} 2x`}
                  width="128"
                  height="80"
                  alt={item}
                />
              </picture>
            </li>
          ))}
        </ul>
        <button
          className="car-slider__control car-slider__control--right"
          type="button"
        >
          <span className="visually-hidden">Листать слайдер вправо</span>
        </button>
      </div>
    </section>
  ) : (
    ""
  );
};

CarSlider.propTypes = {
  carsImages: CarImagesPropTypes,
};

export default CarSlider;
