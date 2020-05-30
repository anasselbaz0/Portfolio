import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
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
  },
  activeLink: {
    padding: '15px 0',
    paddingLeft: '10px',
    borderLeft: `10px solid ${COLORS.SECENDARY}`,
  },
};

function Drawer(props) {
  const { classes } = props;
  return (
    <div className={classes.drawer}>
      <div className={classes.links}>
        <div className={classes.activeLink}>home</div>
        <div className={classes.link}>experiences</div>
        <div className={classes.link}>about</div>
        <div className={classes.link}>formation</div>
        <div className={classes.link}>projects</div>
        <div className={classes.link}>resume</div>
        <div className={classes.link}>contact me</div>
      </div>
    </div>
  );
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(Drawer));
