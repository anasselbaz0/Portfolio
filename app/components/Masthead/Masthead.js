import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import Navigation from '../Navigation/Navigation';

const styles = {
  masthead: {
    height: '8vh',
    backgroundColor: COLORS.BLUE_1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '0',
    zIndex: '2021',
    width: '100%',
  },
  space: {
    flex: '1',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
  },
  link: {
    marginLeft: '10px',
    padding: '0 10px',
    height: '30px',
    borderRadius: '30px',
    backgroundColor: COLORS.WHITE,
    border: `1px solid ${COLORS.GRAY}`,
  },
  linkContent: {
    height: '20px',
  },
  logo: {
    color: COLORS.ACCENT,
    fontFamily: 'Montserrat',
    fontWeight: 600
  },
  linkStyle: {
    textDecoration: 'none',
    color: COLORS.ACCENT,
  },
};

function Masthead(props) {
  const { classes } = props;
  return (
    <div className={classes.masthead}>
      {/* <Logo /> */}
      <div className={classes.space}>
        <div>
          <Link className={classes.linkStyle} to="/">
            <span className={classes.logo}>Anass ELBAZ</span>
          </Link>
        </div>
        <Navigation />

      </div>
    </div>
  );
}

Masthead.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(Masthead));
