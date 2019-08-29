/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import * as titleConstants from '../../../constants/index';

function BannerAside(props) {
  const { classes, banners } = props;

  const renderBannerAside = banners => {
    let result = null;
    const bannerFilterd = banners.filter(banner => banner.status === '1');
    if (banners.length > 0) {
      result = bannerFilterd.map(banner => {
        return (
          <a target="_blank" rel="noopener" key={`banner-${banner.id}`} href={banner.link}>
            <img
              src={`${titleConstants.IMAGE_BASE_URL}/banner/${banner.image}`}
              alt={banner.name ? banner.bane : 'img'}
            />
          </a>
        );
      });
    }
    return result;
  };

  return (
    <div className={classes.bannerAside}>
      { renderBannerAside(banners) }
    </div>
  );
}

BannerAside.propTypes = {
  classes: PropTypes.object,
  banners: PropTypes.array
};

export default withStyles(styles)(BannerAside);
