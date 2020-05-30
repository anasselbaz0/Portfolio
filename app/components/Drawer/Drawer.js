import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';

const styles = {
  drawer: {
    width: '150px',
    height: '100vh',
    paddingTop: '56px',
    backgroundColor: COLORS.BLUE_1,
    position: 'absolute',
    top: '0',
    zIndex: '2020',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    textTransform: 'uppercase',
    fontSize: '1rem',
  },
  links: {
    marginTop: '16px',
  },
  link: {
    padding: '15px 0',
    paddingLeft: '20px',
    fontWeight: '600',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
    },
  },
  activeLink: {
    fontWeight: '700',
    padding: '15px 0',
    paddingLeft: '10px',
    borderLeft: `10px solid ${COLORS.SECENDARY}`,
    background: 'rgba(255, 255, 255, 0.3)',
  },
  linkStyle: {
    textDecoration: 'none',
    color: COLORS.ACCENT,
  },
};

function Drawer(props) {
  const { classes } = props;
  return (
    <div className={classes.drawer}>
      <div className={classes.links}>
        <Link className={classes.linkStyle} to="/">
          <div className={classes.activeLink}>home</div>
        </Link>
        <Link className={classes.linkStyle} to="/about">
          <div className={classes.link}>about</div>
        </Link>
        <Link className={classes.linkStyle} to="/projects">
          <div className={classes.link}>projects</div>
        </Link>
        <Link className={classes.linkStyle} to="/resume">
          <div className={classes.link}>resume</div>
        </Link>
        <Link className={classes.linkStyle} to="/contact">
          <div className={classes.link}>contact me</div>
        </Link>
      </div>
    </div>
  );
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(Drawer));
