import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import COLORS from '../../utils/colors';
import MyButton from '../../components/Button';
import resume from './CV.pdf';

const styles = {
  bar: {
    marginTop: '5px',
    width: '100%',
    height: '8vh',
    padding: '1rem',
    background: COLORS.BACKGROUND_2,
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '2rem 4rem',
    margin: '1rem',
    background: 'rgba(0, 0, 0, 0.05)',
    borderBottom: '#999 solid 1px',
  }
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
        <div className={classes.right}>
f
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResumePage);
