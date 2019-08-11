import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const CustomHeader = ({ title, subtitle }) => (
  <React.Fragment>
    <h1 className={styles.title}>{title}</h1>
    {subtitle && <h6>{subtitle}</h6>}
  </React.Fragment>
);

export default CustomHeader;

CustomHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

CustomHeader.defaultProps = {
  subtitle: null,
};
