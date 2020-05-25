import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import COLORS from '../../utils/colors';

const styles = {
  drawer: {
    width: '100px',
    height: '100vh',
    paddingTop: '56px',
    backgroundColor: COLORS.BLUE_1,
    position: 'absolute',
    top: '0',
    zIndex: '2020',
  },
};

function Drawer(props) {
  const { classes } = props;
  return <div className={classes.drawer} />;
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(Drawer));
