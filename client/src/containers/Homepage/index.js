import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './styles';
import { ContentsMenu } from '../../components/AsideComponent';

function Homepage(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <ContentsMenu mobile="mobile" />
      <div className={classes.slider}>
        <Carousel
          showThumbs={false}
          swipeable
        >
          <img
            src="https://images.pexels.com/photos/1123484/pexels-photo-1123484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="test"
          />
          <img
            src="https://images.pexels.com/photos/1123484/pexels-photo-1123484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="test"
          />
          <img
            src="https://images.pexels.com/photos/1123484/pexels-photo-1123484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="test"
          />
        </Carousel>
      </div>
    </div>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Homepage);
