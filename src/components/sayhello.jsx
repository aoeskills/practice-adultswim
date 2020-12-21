import React from 'react';
import PropTypes from 'prop-types';

const SayHello = ({ names }) => (
  <div>
    {names.map((name) => (
      <div>
        Hello
        {' '}
        {name}
      </div>
    ))}
  </div>
);

SayHello.defaultProps = {
  names: ['World'],
};

SayHello.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
};

export default SayHello;
