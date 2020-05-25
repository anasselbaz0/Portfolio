import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = {
  homePage: {
    padding: '1rem',
  },
};

function HomePage(props) {
  const { classes } = props;
  return <div className={classes.homePage}>hooome</div>;
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(HomePage));
