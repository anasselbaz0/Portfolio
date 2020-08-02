import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import './style.scss';
import COLORS from '../../utils/colors';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  page: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // width: '60%',
    margin: 'auto',
    textAlign: 'center'
  },
  subtitle: {
    color: COLORS.ACCENT,
    margin: '0 4rem',
    fontSize: '1.3rem',
    lineHeight: '2rem',
    maxWidth: '800px'
  },
  mug: {
    height: '1.3rem',
    margin: '0 5px',
    marginBottom: '5px'
  },
  penButton: {
    margin: '2rem',
  },
  pen: {
    fontSize: '3rem',
    padding: '5px',
    color: COLORS.ACCENT,
  }
}

class ContactPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <div id="box">
          <div id="flashlight">
            <span id="flash">WORK</span>
            <span id="light">WITH ME ..</span>
          </div>
        </div>
        <div className={classes.subtitle}>With your vision, my decent work, and a hefty amount of coffee <span><LocalCafeIcon className={classes.mug}/></span>, we can create a digital experience that is creative,
          beautiful, and memorable.
        </div>
        <IconButton className={classes.penButton} href='mailto:anasselbaz0@gmail.com?subject=Work%20Message'>
          <BorderColorIcon className={classes.pen} />
        </IconButton>

      </div>
    );
  }

}

export default withStyles(styles)(ContactPage);
