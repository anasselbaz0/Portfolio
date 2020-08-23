import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import COLORS from '../../utils/colors';
import MyButton from '../../components/Button';

const styles = {
  homePage: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  who: {
    fontSize: '.8rem',
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
    fontSize: '2.2rem',
    textAlign: 'center',
  },
  subtitle: {
    textTransform: 'capitalize',
    color: COLORS.GRAY,
    fontSize: '1.2rem',
    maxWidth: '60%',
    fontWeight: '600',
    margin: '2rem 0 3rem 0',
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
          not your <br/> average <br/> software <br/> engineer
        </div>
        <div className={classes.subtitle}>
          Get ready to turn your <b>ideas</b> to <b>reality</b>!
        </div>
        <div className={classes.actions}>
          <MyButton to="/projects">See my work</MyButton>
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
