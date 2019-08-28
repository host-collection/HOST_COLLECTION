/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

const banners = [
  {
    id: 1,
    name: 'img 1',
    url: 'https://image.freepik.com/free-photo/blonde-girl-thinking-with-copy-space_23-2148221772.jpg',
    status: "1",
    link: "https://www.pexels.com/photo/brown-nipa-hut-on-body-of-water-1179156/"
  },
  {
    id: 2,
    name: 'img 1',
    url: 'https://image.freepik.com/free-psd/soda-bottle-with-splashing-juice_23-2148245503.jpg',
    status: "1",
    link: "https://www.pexels.com/photo/brown-nipa-hut-on-body-of-water-1179156/"
  },
  {
    id: 3,
    name: 'img 1',
    url: 'https://image.freepik.com/free-psd/happy-teenager-girl-sitting-chair_23-2148253822.jpg',
    status: "1",
    link: "https://www.pexels.com/photo/brown-nipa-hut-on-body-of-water-1179156/"
  }
];

function BannerAside(props) {
  const { classes } = props;

  const renderBannerAside = banners => {
    let result = null;
    const bannerFilterd = banners.filter(banner => banner.status === '1');
    if (banners.length > 0) {
      result = bannerFilterd.map(banner => {
        return (
          <a target="_blank" rel="noopener" key={`banner-${banner.id}`} href={banner.link}>
            <img src={banner.url} alt={banner.name} />
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
  classes: PropTypes.object
};

export default withStyles(styles)(BannerAside);
