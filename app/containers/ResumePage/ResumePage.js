import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import COLORS from '../../utils/colors';
import MyButton from '../../components/Button';
import resume from './CV.pdf';

const styles = {
  bar: {
    marginTop: '5px',
    width: '100%',
    padding: '1rem',
    background: COLORS.BACKGROUND_2,
  },
  box: {
    width: '80%',
    margin: '1rem auto',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    padding: '2rem',
    background: 'rgba(0, 0, 0, 0.03)',
  },
};

class ResumePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.bar}>
          <MyButton onClick={() => window.open(resume)}>
            Open Resume (pdf)
          </MyButton>
        </div>
        <div className={classes.box}>

        </div>
        <div className={classes.box}>

        </div>
        <div className={classes.box}>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResumePage);
