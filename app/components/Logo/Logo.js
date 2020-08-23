import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';
import Typography from '@material-ui/core/Typography';

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
};

const Logo = props => {
  const { classes } = props;
  return (
    <div className={classes.logoContainer}>
      <Link to="/" className={classes.link}>
        <Typography variant="h6" noWrap>
          Anass ELBAZ
        </Typography>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
