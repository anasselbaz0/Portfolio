import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import COLORS from '../../utils/colors';
import Masthead from '../../components/Masthead/Masthead';

const styles = {
  application: {
    fontFamily: 'Montserrat',
    backgroundColor: COLORS.AppBackground,
    height: '100vh',
  },
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.application}>
      <Masthead />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
