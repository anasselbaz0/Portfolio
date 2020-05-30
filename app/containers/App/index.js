import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import COLORS from '../../utils/colors';
import Masthead from '../../components/Masthead/Masthead';
import Drawer from '../../components/Drawer/Drawer';

const styles = {
  application: {
    fontFamily: 'Montserrat',
    backgroundColor: COLORS.AppBackground,
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    padding: '56px 0 0 150px',
    height: '100vh',
  },
};

function App(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Masthead />
      <Drawer />
      <div className={classes.application}>
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        {/* <GlobalStyle /> */}
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
