import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';
import Logo from '../Logo/Logo';
import github from '../../images/github.png';

const styles = {
  masthead: {
    height: '56px',
    backgroundColor: COLORS.BLUE_1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontFamily: 'Roboto',
  },
};

function Masthead(props) {
  const { classes } = props;
  return (
    <div className={classes.masthead}>
      <Logo />
      <div className={classes.space}>
        <div>
          <Link to="/">
            <span className={classes.logo}>Anass ELBAZ</span>
          </Link>
        </div>
        <div>
          <a target="_blank" href="https://github.com/anasselbaz0">
            <Button variant="outlined" size="small" className={classes.link}>
              <img
                className={classes.linkContent}
                src={github}
                alt="My Github Account"
              />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

Masthead.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(Masthead));
