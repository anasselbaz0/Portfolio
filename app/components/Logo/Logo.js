import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import COLORS from '../../utils/colors';

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    height: '100%',
    width: '100px',
    padding: '10px',
  },
  logoImage: {
    height: '100%',
  },
};

const Logo = props => {
  const { classes } = props;
  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <img className={classes.logoImage} src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
