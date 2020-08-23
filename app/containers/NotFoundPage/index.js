import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import './glitch.css';
import { Link } from 'react-router-dom';
import COLORS from '../../utils/colors';
import MyButton from '../../components/Button';

const styles = {
  notFoundPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
  },
  subTitle: {
    margin: '2rem 0',
    fontSize: '1rem',
    fontWeight: '400',
    color: COLORS.GRAY,
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

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message404: 'Looks like this page is missing. Don\'t worry though,our best man is on the case.',
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.notFoundPage}>
        <div className="container">
          <div className="glitch" data-text={this.state.message404}>
            {this.state.message404}
          </div>
          <div className="glow">{this.state.message404}</div>
        </div>
        <div className="scanlines" />
        <MyButton to='/'>Back to Home</MyButton>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
