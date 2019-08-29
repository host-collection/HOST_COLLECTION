/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

function OverlayHepler(props) {
  const { active, closeMenu } = props;

  const styles = {
    background: 'rgba(0, 0, 0, .4)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
    width: '100%',
    height: '100%',
    display: active ? 'block' : 'none'
  };

  return (
    <div style={styles} onClick={closeMenu} />
  );
}

OverlayHepler.propTypes = {
  active: PropTypes.bool,
  closeMenu: PropTypes.func
};

export default OverlayHepler;
