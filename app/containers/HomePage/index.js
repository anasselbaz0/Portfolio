import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';

const styles = {
  homePage: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  who: {
    fontWeight: '200',
    textAlign: 'center',
  },
  content: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '900',
    letterSpacing: '2px',
    color: COLORS.ACCENT,
    fontSize: '3rem',
    textAlign: 'center',
  },
  subtitle: {
    textTransform: 'capitalize',
    color: COLORS.GRAY,
    fontSize: '1.2rem',
    maxWidth: '60%',
    fontWeight: '600',
    margin: '2rem',
    textAlign: 'center',
  },
  button: {
    backgroundImage: COLORS.GRADIENT,
    color: COLORS.WHITE,
    padding: '17px 40px',
    fontSize: '1.2rem',
  },
  linkStyle: {
    textDecoration: 'none',
    color: COLORS.ACCENT,
  },
};

function HomePage(props) {
  const { classes } = props;
  return (
    <div className={classes.homePage}>
      <div className={classes.content}>
        <div className={classes.title}>
          not your <br /> average <br /> software <br /> engineer
        </div>
        <div className={classes.subtitle}>
          Get ready to turn your{' '}
          <i>
            <b>ideas</b>
          </i>{' '}
          to{' '}
          <i>
            <b>reality</b>
          </i>{' '}
          !
        </div>
        <div className={classes.actions}>
          <Link className={classes.linkStyle} to="/projects">
            <Button className={classes.button}>See my work</Button>
          </Link>
        </div>
      </div>
      <div className={classes.who}>
        Software Engineer | Full Stack Dev | Casablanca, Morocco
      </div>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(HomePage));
