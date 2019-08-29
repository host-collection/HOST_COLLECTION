/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import * as titleConstants from '../../../constants/ui/aside';
import twitterLogo from '../../../assets/images/twitter.png';
import lineLogo from '../../../assets/images/line.png';
import facebookLogo from '../../../assets/images/facebook.png';

function PromotionAside(props) {
  const { classes, generalInfo } = props;

  const renderGeneralInfo = () => {
    let result = null;
    if (generalInfo[0]) {
      const { social, note } = generalInfo[0];
      const socialParsed = generalInfo && JSON.parse(social);

      result = (
        <div>
          <div className={classes.socialBox}>
            <a target="_blank" rel="noopener" href={socialParsed.twitter}>
              <img src={twitterLogo} alt="Twitter" />
            </a>
            <a target="_blank" rel="noopener" href={socialParsed.line}>
              <img src={lineLogo} alt="LINE" />
            </a>
            <a target="_blank" rel="noopener" href={socialParsed.facebook}>
              <img src={facebookLogo} alt="Facebook" />
            </a>
          </div>
          <div className={classes.noteAside}>
            { note }
          </div>
        </div>
      );
    }
    return result;
  };

  return (
    <div className={classes.promotionAside}>
      <h5>{titleConstants.PROMOTION}</h5>
      { renderGeneralInfo() }
    </div>
  );
}

PromotionAside.propTypes = {
  classes: PropTypes.object,
  generalInfo: PropTypes.array
};

export default withStyles(styles)(PromotionAside);
