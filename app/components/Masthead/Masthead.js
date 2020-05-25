import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import COLORS from '../../utils/colors';

const styles = {
  masthead: {
    height: '56px',
    backgroundColor: COLORS.BLUE_1,
  },
};

function Masthead(props) {
  const { classes } = props;
  return <div className={classes.masthead}>masthead</div>;
}

Masthead.propTypes = {
  classes: PropTypes.array.isRequired,
};

export default withStyles(styles)(connect()(Masthead));
