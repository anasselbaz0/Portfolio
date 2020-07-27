import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import COLORS from '../utils/colors';

const styles = {
  button: {
    backgroundColor: COLORS.ACCENT,
    //backgroundImage: COLORS.GRADIENT,
    color: COLORS.WHITE,
    padding: '.5rem 3rem',
    fontSize: '.8rem',
    fontFamily: 'Montserrat',
    fontWeight: 600,
  },
  buttonColorless: {
    color: COLORS.WHITE,
    padding: '17px 40px',
    fontSize: '1rem',
    fontWeight: 700,
  },
  linkStyle: {
    textDecoration: 'none',
    color: COLORS.ACCENT,
    textAlign: 'center',
  },
};

class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    if (!this.props.to && this.props.onClick) return (
      <Button onClick={this.props.onClick} className={classes.button} variant="contained">{this.props.children}</Button>
    );
    return (
      <Link className={classes.linkStyle} to={this.props.to}>
        <Button className={classes.button} variant="contained">{this.props.children}</Button>
      </Link>
    );
  }
}

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

export default withStyles(styles)(MyButton);
