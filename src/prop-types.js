import PropTypes from "prop-types";

export const CarImagesPropTypes = PropTypes.shape({
  desktop: PropTypes.shape({
    jpg: PropTypes.shape({
      x1: PropTypes.arrayOf(PropTypes.string).isRequired,
      x2: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    webp: PropTypes.shape({
      x1: PropTypes.arrayOf(PropTypes.string).isRequired,
      x2: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
  previews: PropTypes.shape({
    jpg: PropTypes.shape({
      x1: PropTypes.arrayOf(PropTypes.string).isRequired,
      x2: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    webp: PropTypes.shape({
      x1: PropTypes.arrayOf(PropTypes.string).isRequired,
      x2: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
  alts: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const CarPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: CarImagesPropTypes,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  transmission: PropTypes.string.isRequired,
  power: PropTypes.number.isRequired,
  engineType: PropTypes.string.isRequired,
  drive: PropTypes.string.isRequired,
  engineSize: PropTypes.number.isRequired,
  torque: PropTypes.shape({
    max: PropTypes.number.isRequired,
    revs: PropTypes.number.isRequired,
  }),
  cylinders: PropTypes.number.isRequired,
});

export const CarReviewsPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    plus: PropTypes.string.isRequired,
    minus: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  })
);
